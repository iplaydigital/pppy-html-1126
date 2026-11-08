
    // เมื่อหน้าโหลดเสร็จ
    window.onload = function() {
        // ตรวจสอบว่ามีแฮชใน URL หรือไม่
        if (window.location.hash) {
            let targetElement;
            try { targetElement = document.getElementById(decodeURIComponent(window.location.hash.slice(1))); } catch (_) { return; }
            if (targetElement) {
                // เลื่อนไปที่เป้าหมาย และชิดขอบบน
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };
