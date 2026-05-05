(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/js/main.js
  var require_main = __commonJS({
    "src/js/main.js"(exports, module) {
      (() => {
        document.addEventListener("DOMContentLoaded", function() {
          const btn = document.getElementById("lang-select-btn");
          const list = document.getElementById("lang-list");
          const wrapper = document.getElementById("lang-select-wrapper");
          btn.addEventListener("click", function(e) {
            e.stopPropagation();
            list.hidden = !list.hidden;
            const arrow = btn.querySelector(".lang-arrow");
            if (!list.hidden) {
              arrow.classList.add("open");
              btn.classList.add("open");
            } else {
              arrow.classList.remove("open");
              btn.classList.remove("open");
            }
          });
          document.addEventListener("click", function(e) {
            if (!wrapper.contains(e.target)) {
              list.hidden = true;
              const arrow = btn.querySelector(".lang-arrow");
              arrow.classList.remove("open");
              btn.classList.remove("open");
            }
          });
        });
        class WidowsFixer {
          constructor(options = {}) {
            this.options = {
              minWordLength: 2,
              maxLastWordLength: 15,
              // Русские предлоги и союзы
              shortWordsRu: [
                "\u0438",
                "\u0432",
                "\u043A",
                "\u0441",
                "\u0443",
                "\u043E",
                "\u043F\u043E",
                "\u043D\u0430",
                "\u0437\u0430",
                "\u043E\u0442",
                "\u0434\u043E",
                "\u0438\u0437",
                "\u043D\u043E",
                "\u0430",
                "\u0436\u0435",
                "\u043B\u0438",
                "\u0431\u044B",
                "\u0442\u043E",
                "\u043D\u0438",
                "\u043D\u0435",
                "\u0434\u0430",
                "\u0438\u043B\u0438",
                "\u043B\u0438\u0431\u043E",
                "\u0432\u043E",
                "\u0441\u043E",
                "\u043A\u043E",
                "\u0431\u0435\u0437",
                "\u043F\u043E\u0434",
                "\u043D\u0430\u0434",
                "\u043F\u0440\u0438",
                "\u043F\u0440\u043E",
                "\u0447\u0435\u0440\u0435\u0437",
                "\u0441\u043A\u0432\u043E\u0437\u044C",
                "\u0432\u043D\u0435",
                "\u043C\u0435\u0436\u0434\u0443",
                "\u043F\u0435\u0440\u0435\u0434",
                "\u043E\u043A\u043E\u043B\u043E",
                "\u0432\u043E\u0437\u043B\u0435",
                "\u0432\u0434\u043E\u043B\u044C",
                "\u043F\u043E\u043F\u0435\u0440\u0451\u043A",
                "\u043F\u043E\u0441\u043B\u0435",
                "\u0432\u0435\u0434\u044C",
                "\u0432\u043E\u043D",
                "\u0434\u0430\u0436\u0435",
                "\u0435\u0434\u0432\u0430",
                "\u0435\u0441\u043B\u0438",
                "\u043A\u0430\u043A",
                "\u043A\u043E\u0433\u0434\u0430",
                "\u043A\u0443\u0434\u0430",
                "\u043E\u0442\u043A\u0443\u0434\u0430",
                "\u043F\u043E\u0447\u0435\u043C\u0443",
                "\u0437\u0430\u0447\u0435\u043C",
                "\u0441\u043A\u043E\u043B\u044C\u043A\u043E",
                "\u0441\u0442\u043E\u043B\u044C\u043A\u043E",
                "\u0447\u0442\u043E",
                "\u0447\u0442\u043E\u0431",
                "\u0447\u0442\u043E\u0431\u044B",
                "\u044D\u0442\u043E",
                "\u0432\u043E\u0442",
                "\u0443\u0436",
                "\u043D\u0443",
                "\u043F\u0443\u0441\u0442\u044C",
                "\u043F\u0443\u0441\u043A\u0430\u0439",
                "\u0445\u043E\u0442\u044F",
                "\u0445\u043E\u0442\u044C",
                "\u0431\u0443\u0434\u0442\u043E",
                "\u0442\u043E\u0447\u043D\u043E",
                "\u0441\u043B\u043E\u0432\u043D\u043E",
                "\u0442\u043E\u0447\u043D\u043E",
                "\u0440\u043E\u0432\u043D\u043E",
                "\u0440\u0430\u0437",
                "\u0447\u0442\u043E",
                "\u0447\u0442\u043E\u0431",
                "\u0430\u043B\u044C",
                "\u043D\u0435\u0443\u0436\u0435\u043B\u0438",
                "\u0440\u0430\u0437\u0432\u0435",
                "\u043B\u0438",
                "\u043D\u0435",
                "\u043D\u0438",
                "\u0436\u0435",
                "\u0432\u0435\u0434\u044C",
                "\u043C\u043E\u043B",
                "\u0434\u0435\u0441\u043A\u0430\u0442\u044C",
                "\u0434\u0435",
                "\u043A\u0430"
              ],
              // Английские предлоги и союзы
              shortWordsEn: [
                "a",
                "an",
                "the",
                "and",
                "or",
                "but",
                "nor",
                "for",
                "so",
                "yet",
                "at",
                "by",
                "in",
                "of",
                "on",
                "to",
                "up",
                "as",
                "if",
                "is",
                "am",
                "are",
                "was",
                "were",
                "be",
                "been",
                "being",
                "have",
                "has",
                "had",
                "do",
                "does",
                "did",
                "will",
                "would",
                "shall",
                "should",
                "may",
                "might",
                "must",
                "can",
                "could",
                "I",
                "you",
                "he",
                "she",
                "it",
                "we",
                "they",
                "me",
                "him",
                "her",
                "us",
                "them",
                "my",
                "your",
                "his",
                "her",
                "its",
                "our",
                "their",
                "mine",
                "yours",
                "hers",
                "ours",
                "theirs",
                "this",
                "that",
                "these",
                "those",
                "here",
                "there",
                "when",
                "where",
                "why",
                "how",
                "what",
                "which",
                "who",
                "whom",
                "whose",
                "all",
                "any",
                "both",
                "each",
                "few",
                "many",
                "more",
                "most",
                "other",
                "some",
                "such",
                "no",
                "not",
                "only",
                "own",
                "same",
                "so",
                "than",
                "too",
                "very",
                "also",
                "just",
                "now",
                "then",
                "well",
                "thus",
                "hence",
                "therefore",
                "however",
                "moreover",
                "furthermore",
                "nevertheless",
                "nonetheless",
                "though",
                "although",
                "while",
                "whereas",
                "since",
                "because",
                "unless",
                "until",
                "once",
                "twice",
                "thrice",
                "about",
                "above",
                "across",
                "after",
                "against",
                "along",
                "among",
                "around",
                "before",
                "behind",
                "below",
                "beneath",
                "beside",
                "between",
                "beyond",
                "down",
                "during",
                "except",
                "from",
                "into",
                "near",
                "off",
                "over",
                "past",
                "through",
                "throughout",
                "toward",
                "towards",
                "under",
                "underneath",
                "until",
                "unto",
                "upon",
                "with",
                "within",
                "without"
              ],
              // Языки для обработки
              languages: ["ru", "en"],
              selectors: "h1, h2, h3, h4, h5, h6, div, p, li, figcaption, blockquote, .text-block, .title, .heading, .card-title, .lead",
              excludeSelectors: "code, pre, script, style, .no-widows-fix",
              ...options
            };
            this.shortWords = [];
            if (this.options.languages.includes("ru")) {
              this.shortWords = [...this.shortWords, ...this.options.shortWordsRu];
            }
            if (this.options.languages.includes("en")) {
              this.shortWords = [...this.shortWords, ...this.options.shortWordsEn];
            }
            this.shortWords = [...new Set(this.shortWords)];
            this.shortWords.sort((a, b) => b.length - a.length);
          }
          // Проверяем язык слова (упрощенная проверка)
          detectLanguage(word) {
            if (/[а-яА-ЯёЁ]/.test(word))
              return "ru";
            if (/[a-zA-Z]/.test(word))
              return "en";
            return "unknown";
          }
          // Создаем регулярное выражение с учетом языка контекста
          createRegexForText(text) {
            const detectedLang = this.detectLanguage(text);
            let wordsForRegex = this.shortWords;
            if (detectedLang === "ru") {
              wordsForRegex = this.options.shortWordsRu;
            } else if (detectedLang === "en") {
              wordsForRegex = this.options.shortWordsEn;
            }
            if (wordsForRegex.length === 0)
              return null;
            const escapedWords = wordsForRegex.map(
              (word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            );
            const pattern = `([\\s\\n]|^)(${escapedWords.join("|")})\\s+([^\\s]{1,${this.options.maxLastWordLength}})([\\s\\n.,!?;:]|$)`;
            return new RegExp(pattern, "gi");
          }
          // Исправляем висячие предлоги в текстовом узле
          fixTextNode(textNode) {
            let text = textNode.textContent;
            if (text.length < 10)
              return false;
            if (text.includes("{") || text.includes("}") || text.includes("=") || text.includes("function") || text.includes("var ") || text.includes("const ")) {
              return false;
            }
            const regex = this.createRegexForText(text);
            if (!regex)
              return false;
            let newText = text;
            let lastText;
            do {
              lastText = newText;
              newText = newText.replace(regex, "$1$2\xA0$3$4");
            } while (newText !== lastText);
            const singleShortWordPattern = new RegExp(
              `\\s([\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z]{1,3})\\s+([^\\s]{1,${this.options.maxLastWordLength}})([\\s.,!?;:]|$)`,
              "gi"
            );
            do {
              lastText = newText;
              newText = newText.replace(singleShortWordPattern, " $1\xA0$2$3");
            } while (newText !== lastText);
            if (newText !== text) {
              textNode.textContent = newText;
              return true;
            }
            return false;
          }
          // Рекурсивный обход DOM, пропускаем исключенные элементы
          traverseAndFix(element) {
            if (this.shouldExcludeElement(element)) {
              return false;
            }
            let fixed = false;
            for (let node of element.childNodes) {
              if (node.nodeType === Node.TEXT_NODE) {
                if (this.fixTextNode(node))
                  fixed = true;
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                if (this.traverseAndFix(node))
                  fixed = true;
              }
            }
            return fixed;
          }
          // Проверяем, нужно ли исключить элемент из обработки
          shouldExcludeElement(element) {
            const excludeTags = ["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "INPUT"];
            if (excludeTags.includes(element.tagName)) {
              return true;
            }
            if (this.options.excludeSelectors) {
              const excludeSelectors = this.options.excludeSelectors.split(",");
              for (const selector of excludeSelectors) {
                if (element.matches(selector.trim())) {
                  return true;
                }
              }
            }
            if (element.hasAttribute("data-no-widows-fix") || element.hasAttribute("data-widows-ignore")) {
              return true;
            }
            return false;
          }
          // Запуск исправлений
          apply() {
            const elements = document.querySelectorAll(this.options.selectors);
            let totalFixed = 0;
            let totalProcessed = 0;
            elements.forEach((element) => {
              if (this.shouldExcludeElement(element)) {
                return;
              }
              totalProcessed++;
              if (this.traverseAndFix(element)) {
                totalFixed++;
              }
            });
            console.log(`WidowsFixer: \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E ${totalProcessed}/${elements.length} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E ${totalFixed} \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432`);
            return {
              processed: totalProcessed,
              fixed: totalFixed,
              total: elements.length
            };
          }
          // Расширенная статистика
          getStats() {
            return {
              totalShortWords: this.shortWords.length,
              russianWords: this.options.shortWordsRu.length,
              englishWords: this.options.shortWordsEn.length,
              languages: this.options.languages,
              maxLastWordLength: this.options.maxLastWordLength
            };
          }
        }
        document.addEventListener("DOMContentLoaded", () => {
          const pageLang = document.documentElement.lang || document.querySelector('meta[name="language"]')?.content || document.querySelector('meta[property="og:locale"]')?.content || "ru";
          const languages = [];
          if (pageLang.startsWith("ru")) {
            languages.push("ru");
          }
          if (pageLang.startsWith("en")) {
            languages.push("en");
          }
          if (languages.length === 0) {
            languages.push("ru", "en");
          }
          window.widowsFixer = new WidowsFixer({
            languages,
            maxLastWordLength: 20,
            excludeSelectors: "code, pre, .code, .pre, [data-no-widows], .no-widows-fix"
          });
          window.widowsFixer.apply();
          const observer = new MutationObserver((mutations) => {
            let shouldRefix = false;
            for (const mutation of mutations) {
              for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (node.querySelectorAll(window.widowsFixer.options.selectors).length > 0) {
                    shouldRefix = true;
                    break;
                  }
                }
              }
              if (shouldRefix)
                break;
            }
            if (shouldRefix) {
              setTimeout(() => window.widowsFixer.apply(), 50);
            }
          });
          observer.observe(document.body, {
            childList: true,
            subtree: true
          });
          window.fixWidows = () => window.widowsFixer.apply();
        });
        if (typeof module !== "undefined" && module.exports) {
          module.exports = WidowsFixer;
        }
        function initToTopButton(blocks) {
          const toTopButton = document.createElement("button");
          toTopButton.className = "to-top-button";
          const scrollVisibilityThreshold = 500;
          document.body.appendChild(toTopButton);
          let cachedHeaderHeight = null;
          function updateToTopButton() {
            const anyBlockOpen = Array.from(blocks).some((block) => {
              const maxHeight = block.style.maxHeight;
              return maxHeight && maxHeight !== "0px" && maxHeight !== "0";
            });
            const isScrolledEnough = window.scrollY > scrollVisibilityThreshold;
            if (anyBlockOpen || isScrolledEnough) {
              toTopButton.classList.add("visible");
            } else {
              toTopButton.classList.remove("visible");
            }
          }
          window.addEventListener("scroll", updateToTopButton, { passive: true });
          function getHeaderHeight() {
            if (cachedHeaderHeight !== null) {
              return cachedHeaderHeight;
            }
            const headerSelectors = [
              "header",
              ".header",
              ".site-header",
              ".main-header",
              ".navbar",
              ".nav",
              ".fixed-top",
              ".sticky-top",
              '[role="banner"]'
            ];
            let maxHeight = 0;
            headerSelectors.forEach((selector) => {
              const elements = document.querySelectorAll(selector);
              elements.forEach((element) => {
                const style = window.getComputedStyle(element);
                const position = style.position;
                if ((position === "fixed" || position === "sticky") && style.display !== "none" && element.offsetParent !== null) {
                  const height = element.offsetHeight;
                  if (height > maxHeight) {
                    maxHeight = height;
                  }
                }
              });
            });
            cachedHeaderHeight = maxHeight > 0 ? maxHeight + 15 : 100;
            return cachedHeaderHeight;
          }
          function resetHeaderCache() {
            cachedHeaderHeight = null;
          }
          window.addEventListener("resize", resetHeaderCache);
          function scrollToElement(element) {
            if (!element)
              return;
            const headerHeight = getHeaderHeight();
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth"
            });
          }
          function scrollToTop(e) {
            e.preventDefault();
            const header = document.querySelector(".salary-links");
            if (header) {
              scrollToElement(header);
            } else {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }
          }
          toTopButton.addEventListener("click", scrollToTop);
          const closeAllBlocks = () => {
            blocks.forEach((block) => {
              block.style.maxHeight = "0";
              block.style.opacity = "0";
            });
            updateToTopButton();
          };
          toTopButton.addEventListener("click", (e) => {
            scrollToTop(e);
            setTimeout(closeAllBlocks, 300);
          });
          return {
            button: toTopButton,
            update: updateToTopButton,
            closeAllBlocks,
            getHeaderHeight,
            scrollToElement,
            resetHeaderCache
          };
        }
        document.addEventListener("DOMContentLoaded", function() {
          var blocks = document.querySelectorAll(".salary");
          var links = document.querySelectorAll(".salary-links__item");
          const toTopManager = initToTopButton(blocks);
          links.forEach((link) => {
            link.addEventListener("click", (e) => {
              e.preventDefault();
              const target = link.dataset.link;
              let openedBlock = null;
              blocks.forEach((block) => {
                if (block.dataset.block === target) {
                  block.style.maxHeight = block.scrollHeight + "px";
                  block.style.opacity = "1";
                  openedBlock = block;
                } else {
                  block.style.maxHeight = "0";
                  block.style.opacity = "0";
                }
              });
              if (openedBlock) {
                setTimeout(() => {
                  toTopManager.scrollToElement(openedBlock);
                }, 100);
              }
              setTimeout(() => {
                toTopManager.update();
              }, 150);
            });
          });
          toTopManager.update();
        });
        document.addEventListener("DOMContentLoaded", () => {
          const options = {
            threshold: 0.15
            // 15% блока в зоне видимости
          };
          const observer = new IntersectionObserver((entries, observer2) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer2.unobserve(entry.target);
              }
            });
          }, options);
          const blocks = document.querySelectorAll(".salary-planned__container, .salary-unplanned__container, .salary-planned__main-title, .salary-unplanned__main-title, .trip__container, .trip__main-title, .dayoff__container, .dayoff__main-title, .main-block__main-title, .main-links__container, .salary-links__title, .salary-links__items");
          blocks.forEach((block) => observer.observe(block));
        });
      })();
    }
  });
  require_main();
})();
