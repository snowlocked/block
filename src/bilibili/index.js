// ==UserScript==
// @name         删除B站无用节点
// @namespace    http://github.com/snowlocked
// @supportURL   https://github.com/snowlocked/README.md
// @version      0.0.1
// @description  删除无用节点
// @author       snowlocked
// @license      MIT
// @match       https://www.bilibili.com
// @run-at       document-start
// @grant        none
// ==/UserScript==


(function () {
  'use strict';
  function remove() {
    let extensionArea = document.querySelector('.bili-grid:has(.eva-extension-area)');
    let battleArea = document.querySelector('.bili-grid:has(.battle-area)');
    console.log('I want to remove extension and battle area', extensionArea, battleArea)
    if (extensionArea && battleArea) {
      extensionArea.remove();
      battleArea.remove();
    } else {
      setTimeout(remove, 500)
    }

  }

  window.addEventListener('DOMContentLoaded', remove)
})();
