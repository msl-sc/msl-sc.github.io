/* Language + theme toggle */
(function () {
  var DICT = {
    en: {
      "meta.title": "Mingsong Liu",
      "meta.desc": "Mingsong Liu, Mathematics with Computer Science.",
      "lang.label": "Language",
      "intro": "Mingsong Liu — undergraduate in Mathematics with Computer Science at Guangdong Technion – Israel Institute of Technology (GTIIT). Interested in theoretical computer science and quantum information.",
      "theme.to.dark": "Dark",
      "theme.to.light": "Light"
    },
    zh: {
      "meta.title": "刘明松",
      "meta.desc": "刘明松，数学与计算机科学。",
      "lang.label": "语言",
      "intro": "刘明松，广东以色列理工学院（GTIIT）数学与计算机科学专业本科生，兴趣为理论计算机科学与量子信息。",
      "theme.to.dark": "深色",
      "theme.to.light": "浅色"
    }
  };

  var LANG_KEY = "site-lang";
  var THEME_KEY = "site-theme";
  var current;

  function themeLabel() {
    var table = DICT[current] || DICT.en;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    return isDark ? table["theme.to.light"] : table["theme.to.dark"];
  }

  function syncThemeLabel() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.textContent = themeLabel();
    btn.setAttribute("aria-label", themeLabel());
  }

  function apply(lang) {
    current = lang;
    var table = DICT[lang] || DICT.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var val = table[el.getAttribute("data-i18n")];
      if (val === undefined) continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, val);
      else if (el.tagName === "TITLE") el.textContent = val;
      else el.innerHTML = val;
    }

    var btns = document.querySelectorAll("[data-lang]");
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("on", on);
      btns[j].setAttribute("aria-pressed", on ? "true" : "false");
    }

    syncThemeLabel();
  }

  function getSaved(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  var savedLang = getSaved(LANG_KEY);
  if (savedLang !== "en" && savedLang !== "zh") {
    savedLang = (navigator.language || "en").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }
  apply(savedLang);

  var langButtons = document.querySelectorAll("[data-lang]");
  for (var k = 0; k < langButtons.length; k++) {
    langButtons[k].addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      save(LANG_KEY, lang);
      apply(lang);
    });
  }

  var themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      save(THEME_KEY, next);
      syncThemeLabel();
    });
  }
})();
