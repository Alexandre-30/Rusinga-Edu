// Stores the chosen subject(s) in sessionStorage so Main.html can read them.

(function () {
  function getSelectedValues(name) {
    const checked = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`));
    return checked.map((el) => el.className.split(/\s+/)[0]);
  }

  function saveSubjects() {
    // Radio groups in SS.html all use: name="subject"
    const selected = Array.from(document.querySelectorAll('input[name="subject"]:checked'));

    // Save each selected value as the subject element class/name.
    const values = selected.map((el) => el.className.trim().split(/\s+/)[0]).filter(Boolean);

    // If you prefer text labels instead of classes, use: el.nextSibling?.textContent etc.

    sessionStorage.setItem('selectedSubjects', JSON.stringify(values));
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Save on form submit navigation.
    document.querySelectorAll('form').forEach((f) => {
      f.addEventListener('submit', saveSubjects);
    });

    // Force-save on submit-button click (capture) so navigation doesn't happen before storage.
    // Works even with nested forms.
    document.addEventListener(
      'click',
      (e) => {
        const t = e.target;
        if (t && t.tagName === 'BUTTON') {
          saveSubjects();
        }
      },
      true // capture
    );
  });

  window.saveSubjects = saveSubjects;
})();

