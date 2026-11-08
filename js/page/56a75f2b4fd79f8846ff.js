
        // Fallback for YouTube Error 153 when opening HTML directly as a local file (file:// protocol)
        if (window.location.protocol === 'file:') {
            document.addEventListener('click', function (event) {
                var lightboxLink = event.target.closest('.w-lightbox');
                if (lightboxLink) {
                    var scriptTag = lightboxLink.querySelector('script.w-json');
                    if (scriptTag) {
                        try {
                            var data = JSON.parse(scriptTag.textContent || scriptTag.innerText);
                            if (data && data.items && data.items.length > 0) {
                                var item = data.items[0];
                                var isVideo = item.type === 'video' || item.type === 'html' || 
                                              (item.url && (item.url.indexOf('youtube.com') !== -1 || item.url.indexOf('youtu.be') !== -1 || item.url.indexOf('youtube-nocookie.com') !== -1));
                                if (isVideo) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    var videoUrl = item.url || item.originalUrl;
                                    if (!videoUrl && item.html) {
                                        var match = item.html.match(/src="([^"]+)"/);
                                        if (match) {
                                            videoUrl = match[1];
                                        }
                                    }
                                    if (videoUrl) {
                                        try {
                                            var parsed = new URL(videoUrl);
                                            if (parsed.protocol === 'https:' && ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(parsed.hostname) && !parsed.username && !parsed.password && !parsed.port) {
                                                window.open(parsed.href, '_blank', 'noopener,noreferrer');
                                            }
                                        } catch (_) { /* Ignore invalid video URLs. */ }
                                    }
                                    return false;
                                }
                            }
                        } catch (e) {
                            console.error("Error parsing lightbox JSON:", e);
                        }
                    }
                }
            }, true); // Use capturing phase to run before Webflow's click listener
        }
    