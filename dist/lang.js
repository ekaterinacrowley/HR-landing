(() => {
  // src/js/lang.js
  var translations = {
    en: {
      title: "G&S Team"
    },
    ru: {
      title: "G&S Team"
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    setDirection(lang);
  }
  function setDirection(lang) {
    document.documentElement.dir = "ltr";
    document.body.style.textAlign = "";
  }
  function getLanguage() {
    return localStorage.getItem("lang") || "en";
  }
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t)
      return;
    document.querySelectorAll('[data-i18n="title"]').forEach((el) => el.textContent = t.title);
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = getLanguage();
    applyTranslations(lang);
    setDirection(lang);
  });
  window.setLanguage = setLanguage;
})();
