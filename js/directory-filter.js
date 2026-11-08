/* Directory filters are kept as UI controls; the original API is unavailable. */
document.addEventListener('click', function (event) {
  var target = event.target.closest('[data-directory-filter]');
  if (!target) return;
  var name = target.dataset.directoryFilter;
  if (!['filterByLetter', 'filterByLetter66', 'filterByLetterAll'].includes(name)) return;
  event.preventDefault();
  if (typeof window[name] === 'function') window[name](target.dataset.filterValue || '');
});
