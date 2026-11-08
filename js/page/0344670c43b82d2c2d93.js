
    // The supplied static archive contains no partner directory data source.
    function filterByLetter() {
        ['lecturer', 'committee'].forEach(function (role) {
            var container = document.getElementById('nodata-' + role);
            if (container) container.textContent = 'ยังไม่มีข้อมูลทำเนียบสำหรับการค้นหา';
        });
    }
    document.addEventListener('DOMContentLoaded', filterByLetter);
