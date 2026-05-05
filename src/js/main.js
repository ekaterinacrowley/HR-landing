(() => {
  // src/js/main.js
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

  // advanced-widows-fix.js - с поддержкой русского и английского
class WidowsFixer {
  constructor(options = {}) {
    this.options = {
      minWordLength: 2,
      maxLastWordLength: 15,
      // Русские предлоги и союзы
      shortWordsRu: [
        'и', 'в', 'к', 'с', 'у', 'о', 'по', 'на', 'за', 'от', 'до', 'из',
        'но', 'а', 'же', 'ли', 'бы', 'то', 'ни', 'не', 'да', 'или', 'либо',
        'во', 'со', 'ко', 'без', 'под', 'над', 'при', 'про', 'через', 'сквозь',
        'вне', 'между', 'перед', 'около', 'возле', 'вдоль', 'поперёк', 'после',
        'ведь', 'вон', 'даже', 'едва', 'если', 'как', 'когда', 'куда', 'откуда',
        'почему', 'зачем', 'сколько', 'столько', 'что', 'чтоб', 'чтобы', 'это',
        'вот', 'уж', 'ну', 'пусть', 'пускай', 'хотя', 'хоть', 'будто', 'точно',
        'словно', 'точно', 'ровно', 'раз', 'что', 'чтоб', 'аль', 'неужели', 
        'разве', 'ли', 'не', 'ни', 'же', 'ведь', 'мол', 'дескать', 'де', 'ка'
      ],
      // Английские предлоги и союзы
      shortWordsEn: [
        'a', 'an', 'the', 'and', 'or', 'but', 'nor', 'for', 'so', 'yet',
        'at', 'by', 'in', 'of', 'on', 'to', 'up', 'as', 'if', 'is', 'am',
        'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
        'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'may',
        'might', 'must', 'can', 'could', 'I', 'you', 'he', 'she', 'it',
        'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your',
        'his', 'her', 'its', 'our', 'their', 'mine', 'yours', 'hers',
        'ours', 'theirs', 'this', 'that', 'these', 'those', 'here',
        'there', 'when', 'where', 'why', 'how', 'what', 'which', 'who',
        'whom', 'whose', 'all', 'any', 'both', 'each', 'few', 'many',
        'more', 'most', 'other', 'some', 'such', 'no', 'not', 'only',
        'own', 'same', 'so', 'than', 'too', 'very', 'also', 'just',
        'now', 'then', 'well', 'thus', 'hence', 'therefore', 'however',
        'moreover', 'furthermore', 'nevertheless', 'nonetheless', 'though',
        'although', 'while', 'whereas', 'since', 'because', 'unless',
        'until', 'once', 'twice', 'thrice', 'about', 'above', 'across',
        'after', 'against', 'along', 'among', 'around', 'before', 'behind',
        'below', 'beneath', 'beside', 'between', 'beyond', 'down', 'during',
        'except', 'from', 'into', 'near', 'off', 'over', 'past', 'through',
        'throughout', 'toward', 'towards', 'under', 'underneath', 'until',
        'unto', 'upon', 'with', 'within', 'without'
      ],
      // Языки для обработки
      languages: ['ru', 'en'],
      selectors: 'h1, h2, h3, h4, h5, h6, div, p, li, figcaption, blockquote, .text-block, .title, .heading, .card-title, .lead',
      excludeSelectors: 'code, pre, script, style, .no-widows-fix',
      ...options
    };
    
    // Объединяем слова из выбранных языков
    this.shortWords = [];
    if (this.options.languages.includes('ru')) {
      this.shortWords = [...this.shortWords, ...this.options.shortWordsRu];
    }
    if (this.options.languages.includes('en')) {
      this.shortWords = [...this.shortWords, ...this.options.shortWordsEn];
    }
    
    // Удаляем дубликаты
    this.shortWords = [...new Set(this.shortWords)];
    
    // Сортируем по длине (длинные слова сначала для правильного matching)
    this.shortWords.sort((a, b) => b.length - a.length);
  }
  
  // Проверяем язык слова (упрощенная проверка)
  detectLanguage(word) {
    // Проверяем кириллицу
    if (/[а-яА-ЯёЁ]/.test(word)) return 'ru';
    // Проверяем латиницу
    if (/[a-zA-Z]/.test(word)) return 'en';
    return 'unknown';
  }
  
  // Создаем регулярное выражение с учетом языка контекста
  createRegexForText(text) {
    const detectedLang = this.detectLanguage(text);
    
    // Фильтруем слова по языку текста
    let wordsForRegex = this.shortWords;
    if (detectedLang === 'ru') {
      wordsForRegex = this.options.shortWordsRu;
    } else if (detectedLang === 'en') {
      wordsForRegex = this.options.shortWordsEn;
    }
    
    if (wordsForRegex.length === 0) return null;
    
    // Экранируем специальные символы в словах для regex
    const escapedWords = wordsForRegex.map(word => 
      word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    
    // Регулярное выражение для поиска висячих предлогов
    // Ищем предлог + пробел + короткое конечное слово
    const pattern = `([\\s\\n]|^)(${escapedWords.join('|')})\\s+([^\\s]{1,${this.options.maxLastWordLength}})([\\s\\n.,!?;:]|$)`;
    
    return new RegExp(pattern, 'gi');
  }
  
  // Исправляем висячие предлоги в текстовом узле
  fixTextNode(textNode) {
    let text = textNode.textContent;
    
    // Пропускаем очень короткие тексты
    if (text.length < 10) return false;
    
    // Пропускаем текст, который выглядит как код или специальный контент
    if (text.includes('{') || text.includes('}') || text.includes('=') || 
        text.includes('function') || text.includes('var ') || text.includes('const ')) {
      return false;
    }
    
    const regex = this.createRegexForText(text);
    if (!regex) return false;
    
    let newText = text;
    let lastText;
    
    // Многократная замена для случаев с несколькими висячими предлогами
    do {
      lastText = newText;
      newText = newText.replace(regex, '$1$2\u00A0$3$4');
    } while (newText !== lastText);
    
    // Также обрабатываем одиночные короткие слова в конце
    // (предлоги, которые уже стоят перед последним словом)
    const singleShortWordPattern = new RegExp(
      `\\s([а-яА-ЯёЁa-zA-Z]{1,3})\\s+([^\\s]{1,${this.options.maxLastWordLength}})([\\s.,!?;:]|$)`, 
      'gi'
    );
    
    do {
      lastText = newText;
      newText = newText.replace(singleShortWordPattern, ' $1\u00A0$2$3');
    } while (newText !== lastText);
    
    if (newText !== text) {
      textNode.textContent = newText;
      return true;
    }
    
    return false;
  }
  
  // Рекурсивный обход DOM, пропускаем исключенные элементы
  traverseAndFix(element) {
    // Проверяем, не нужно ли исключить этот элемент
    if (this.shouldExcludeElement(element)) {
      return false;
    }
    
    let fixed = false;
    
    for (let node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (this.fixTextNode(node)) fixed = true;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (this.traverseAndFix(node)) fixed = true;
      }
    }
    
    return fixed;
  }
  
  // Проверяем, нужно ли исключить элемент из обработки
  shouldExcludeElement(element) {
    // Проверяем теги для исключения
    const excludeTags = ['SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA', 'INPUT'];
    if (excludeTags.includes(element.tagName)) {
      return true;
    }
    
    // Проверяем классы для исключения
    if (this.options.excludeSelectors) {
      const excludeSelectors = this.options.excludeSelectors.split(',');
      for (const selector of excludeSelectors) {
        if (element.matches(selector.trim())) {
          return true;
        }
      }
    }
    
    // Проверяем атрибут data-*
    if (element.hasAttribute('data-no-widows-fix') || 
        element.hasAttribute('data-widows-ignore')) {
      return true;
    }
    
    return false;
  }
  
  // Запуск исправлений
  apply() {
    // Находим все элементы для обработки
    const elements = document.querySelectorAll(this.options.selectors);
    let totalFixed = 0;
    let totalProcessed = 0;
    
    elements.forEach(element => {
      if (this.shouldExcludeElement(element)) {
        return;
      }
      
      totalProcessed++;
      if (this.traverseAndFix(element)) {
        totalFixed++;
      }
    });
    
    console.log(`WidowsFixer: обработано ${totalProcessed}/${elements.length} элементов, исправлено ${totalFixed} текстовых блоков`);
    
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

// Автоматическая инициализация с настройками по умолчанию
document.addEventListener('DOMContentLoaded', () => {
  // Определяем язык страницы
  const pageLang = document.documentElement.lang || 
                   document.querySelector('meta[name="language"]')?.content ||
                   document.querySelector('meta[property="og:locale"]')?.content ||
                   'ru';
  
  // Определяем, какие языки обрабатывать
  const languages = [];
  if (pageLang.startsWith('ru')) {
    languages.push('ru');
  }
  if (pageLang.startsWith('en')) {
    languages.push('en');
  }
  // Если язык не определен, пробуем оба
  if (languages.length === 0) {
    languages.push('ru', 'en');
  }
  
  // Создаем экземпляр с настройками
  window.widowsFixer = new WidowsFixer({
    languages: languages,
    maxLastWordLength: 20,
    excludeSelectors: 'code, pre, .code, .pre, [data-no-widows], .no-widows-fix'
  });
  
  // Применяем исправления
  window.widowsFixer.apply();
  
  // Для динамического контента (SPA, AJAX, ленивая загрузка)
  const observer = new MutationObserver((mutations) => {
    let shouldRefix = false;
    
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Проверяем, содержит ли новый элемент текстовые блоки
          if (node.querySelectorAll(window.widowsFixer.options.selectors).length > 0) {
            shouldRefix = true;
            break;
          }
        }
      }
      if (shouldRefix) break;
    }
    
    if (shouldRefix) {
      setTimeout(() => window.widowsFixer.apply(), 50);
    }
  });
  
  // Начинаем наблюдение за изменениями в body
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Делаем глобально доступным для ручного вызова
  window.fixWidows = () => window.widowsFixer.apply();
});

// Экспорт для использования в модульных системах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WidowsFixer;
}
  
// Функция для создания и управления кнопкой "Наверх"
function initToTopButton(blocks) {
  // Создаем кнопку
  const toTopButton = document.createElement('button');
  toTopButton.className = 'to-top-button';
  const scrollVisibilityThreshold = 500;

  
  // Добавляем кнопку в body
  document.body.appendChild(toTopButton);
  
  // Кэш для высоты хедера
  let cachedHeaderHeight = null;
  
  // Функция для проверки видимости кнопки
  function updateToTopButton() {
    const anyBlockOpen = Array.from(blocks).some(block => {
      const maxHeight = block.style.maxHeight;
      return maxHeight && maxHeight !== '0px' && maxHeight !== '0';
    });
    const isScrolledEnough = window.scrollY > scrollVisibilityThreshold;
    
    if (anyBlockOpen || isScrolledEnough) {
      toTopButton.classList.add('visible');
    } else {
      toTopButton.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateToTopButton, { passive: true });
  
  // Функция получения высоты хедера с кэшированием
  function getHeaderHeight() {
    if (cachedHeaderHeight !== null) {
      return cachedHeaderHeight;
    }
    
    const headerSelectors = [
      'header',
      '.header',
      '.site-header',
      '.main-header',
      '.navbar',
      '.nav',
      '.fixed-top',
      '.sticky-top',
      '[role="banner"]'
    ];
    
    let maxHeight = 0;
    
    headerSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const style = window.getComputedStyle(element);
        const position = style.position;
        
        // Проверяем, является ли элемент видимым фиксированным/стики хедером
        if ((position === 'fixed' || position === 'sticky') && 
            style.display !== 'none' && 
            element.offsetParent !== null) {
          
          const height = element.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });
    });
    
    // Если нашли хедер, добавляем небольшой отступ для комфорта
    cachedHeaderHeight = maxHeight > 0 ? maxHeight + 15 : 100;
    return cachedHeaderHeight;
  }
  
  // Функция для сброса кэша (на случай изменения размера хедера)
  function resetHeaderCache() {
    cachedHeaderHeight = null;
  }
  
  // Сбрасываем кэш при изменении размера окна
  window.addEventListener('resize', resetHeaderCache);
  
  // Функция плавной прокрутки к элементу с отступом
  function scrollToElement(element) {
    if (!element) return;
    
    const headerHeight = getHeaderHeight();
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }
  
  // Функция прокрутки наверх (к salary-links)
  function scrollToTop(e) {
    e.preventDefault();
    
    const header = document.querySelector('.salary-links');
    if (header) {
      scrollToElement(header);
    } else {
      // Если не нашли .salary-links, прокручиваем просто наверх
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  
  toTopButton.addEventListener('click', scrollToTop);
  
  const closeAllBlocks = () => {
    blocks.forEach((block) => {
      block.style.maxHeight = '0';
      block.style.opacity = '0';
    });
    updateToTopButton();
  };
  

  toTopButton.addEventListener('click', (e) => {
    scrollToTop(e);
    setTimeout(closeAllBlocks, 300); 
  });
  
  return {
    button: toTopButton,
    update: updateToTopButton,
    closeAllBlocks: closeAllBlocks,
    getHeaderHeight: getHeaderHeight,
    scrollToElement: scrollToElement,
    resetHeaderCache: resetHeaderCache
  };
}


document.addEventListener('DOMContentLoaded', function() {
  var blocks = document.querySelectorAll(".salary"); 
  var links = document.querySelectorAll(".salary-links__item");
  
  // Передаем blocks в функцию инициализации
  const toTopManager = initToTopButton(blocks);
  
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.link;
      let openedBlock = null;
      
      blocks.forEach((block) => {
        if (block.dataset.block === target) {
          // Открываем блок
          block.style.maxHeight = block.scrollHeight + "px";
          block.style.opacity = "1";
          openedBlock = block;
        } else {
          // Закрываем другие блоки
          block.style.maxHeight = "0";
          block.style.opacity = "0";
        }
      });
      
      // Прокручиваем к открытому блоку с учетом высоты хедера
      if (openedBlock) {
        setTimeout(() => {
          toTopManager.scrollToElement(openedBlock);
        }, 100);
      }
      
      // Обновляем состояние кнопки "Наверх"
      setTimeout(() => {
        toTopManager.update();
      }, 150);
    });
  });
  
  // ... остальной код без изменений
  
  // Инициализируем начальное состояние кнопки
  toTopManager.update();
});

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.15, // 15% блока в зоне видимости
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // анимируем один раз
      }
    });
  }, options);

  // только первый уровень блоков
  const blocks = document.querySelectorAll(".salary-planned__container, .salary-unplanned__container, .salary-planned__main-title, .salary-unplanned__main-title, .trip__container, .trip__main-title, .dayoff__container, .dayoff__main-title, .main-block__main-title, .main-links__container, .salary-links__title, .salary-links__items");
  blocks.forEach(block => observer.observe(block));
});



})();
