/* The embedded map is loaded only after the visitor chooses to connect to Google. */
document.querySelectorAll('.load-map').forEach(function (button) {
  button.addEventListener('click', function () {
    try {
      var url = new URL(button.dataset.mapUrl);
      if (url.protocol !== 'https:' || url.hostname !== 'www.google.com' ||
          url.pathname !== '/maps/embed' || url.username || url.password || url.port) return;
      var frame = document.createElement('iframe');
      frame.src = url.href;
      frame.title = 'แผนที่มูลนิธิเพาะพันธุ์ปัญญา';
      frame.width = '800';
      frame.height = '450';
      frame.style.border = '0';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer';
      frame.allowFullscreen = true;
      button.parentElement.replaceChildren(frame);
    } catch (_) {
      button.textContent = 'ไม่สามารถโหลดแผนที่ได้';
    }
  });
});
