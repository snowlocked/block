// ==UserScript==
// @name         删除B站无用节点
// @namespace    http://github.com/snowlocked
// @version      0.0.1
// @description  删除无用节点
// @author       snowlocked
// @license      MIT
// @match       https://www.bilibili.com
// @run-at       document-start
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    function remove(){
        const observer = new MutationObserver(function(mutations, observer){

            let extensionArea = document.querySelector('.bili-grid:has(.eva-extension-area)');
            let battleArea = document.querySelector('.bili-grid:has(.battle-area)');
            console.log('remove',extensionArea, battleArea);
            if(extensionArea || battleArea){
                extensionArea?.remove();
                battleArea?.remove();
            }
        });
        var el = document.querySelector('.bili-layout');
        const options = {
            'childList': true,
        } ;
        observer.observe(el, options);
    }

    window.addEventListener('DOMContentLoaded', remove)
})();
