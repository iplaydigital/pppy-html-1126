/* Copy the current page URL only after an explicit user action. */
document.querySelectorAll('.copy-page-link').forEach(function (button) {
  button.addEventListener('click', async function () {
    var status = button.parentElement.querySelector('.copy-page-status');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(window.location.href);
      if (status) status.textContent = 'คัดลอกลิงก์แล้ว';
    } catch (_) {
      if (status) status.textContent = 'ไม่สามารถคัดลอกได้ โปรดคัดลอก URL จากแถบที่อยู่';
    }
  });
});
