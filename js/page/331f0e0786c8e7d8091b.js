
    // The supplied static archive contains no student directory data source.
    function showDirectoryUnavailable(year) {
        var container = document.getElementById('nodata-' + year);
        if (container) container.textContent = 'ยังไม่มีข้อมูลทำเนียบนักเรียนสำหรับการค้นหา';
    }
    function filterByLetter() { showDirectoryUnavailable('2567'); }
    function filterByLetter66() { showDirectoryUnavailable('66'); }
    function filterByLetterAll() { showDirectoryUnavailable('all'); }
    document.addEventListener('DOMContentLoaded', function () {
        ['2567', '66', 'all'].forEach(showDirectoryUnavailable);
    });
