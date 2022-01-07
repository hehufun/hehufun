/* global KEEP */

window.addEventListener('DOMContentLoaded', () => {

  KEEP.themeInfo = {
    theme: `Keep v${KEEP.theme_config.version}`,
    author: 'XPoet',
    repository: 'https://github.com/XPoet/hexo-theme-keep'
  }

  KEEP.localStorageKey = 'KEEP-THEME-STATUS';

  KEEP.styleStatus = {
    isExpandPageWidth: false,
    isDark: false,
    fontSizeLevel: 0,
    isOpenPageAside: true
  }

  // print theme base info
  KEEP.printThemeInfo = () => {
    console.log(`\n %c ${KEEP.themeInfo.theme} %c ${KEEP.themeInfo.repository} \n`, `color: #fadfa3; background: #333; padding: 5px 0;`, `background: #fadfa3; padding: 5px 0;`);
  }

  // set styleStatus to localStorage
  KEEP.setStyleStatus = () => {
    localStorage.setItem(KEEP.localStorageKey, JSON.stringify(KEEP.styleStatus));
  }

  // get styleStatus from localStorage
  KEEP.getStyleStatus = () => {
    let temp = localStorage.getItem(KEEP.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in KEEP.styleStatus) {
        KEEP.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  }

  KEEP.refresh = () => {
    KEEP.initUtils();
    KEEP.initHeaderShrink();
    KEEP.initModeToggle();
    KEEP.initBack2Top();

    if (KEEP.theme_config.local_search.enable === true) {
      KEEP.initLocalSearch();
    }

    if (KEEP.theme_config.code_copy.enable === true) {
      KEEP.initCodeCopy();
    }

    if (KEEP.theme_config.lazyload.enable === true) {
      KEEP.initLazyLoad();
    }
  }

  KEEP.printThemeInfo();
  KEEP.refresh();
});

// 添加动态标题
var link =
  document.querySelector('link[rel*="icon"]') || document.createElement("link");
link.rel = "shortcut icon";

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "hidden") {
    normal_title = document.title;
    document.title = "❌记得关掉❌";
    link.href = "./images/logo1.svg";
  } else {
    document.title = "💓欢迎回来💓";
    setTimeout(function () {
      document.title = normal_title;
    }, 1600);
    link.href = "./images/logo.svg";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
});
