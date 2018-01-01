// ==UserScript==
// @name         Steam discovery queue autocomplete
// @version      0.1
// @description  Skip through the discovery Queue
// @author       Granor
// @match        http://store.steampowered.com/*
// ==/UserScript==

(function() {
    'use strict';

    let result = document.evaluate('//*[contains(text(),"Finish Queue")] | //*[contains(text(),"Next in Que")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
    if(result)
        result.singleNodeValue.click();
})();
