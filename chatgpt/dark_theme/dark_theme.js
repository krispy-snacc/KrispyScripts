// ==UserScript==
// @name         ChatGPT - True Dark Theme
// @namespace    https://example.com/userscripts
// @license      MIT
// @version      1.0
// @description  Makes ChatGPT dark mode truly black by changing the styles
// @author       @krispy-snacc (https://github.com/krispy-snacc)
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @grant        none
// @run-at       document-body
// @downloadURL https://raw.githubusercontent.com/krispy-snacc/KrispyScripts/refs/heads/main/chatgpt/dark_theme/dark_theme.js
// @updateURL https://raw.githubusercontent.com/krispy-snacc/KrispyScripts/refs/heads/main/chatgpt/dark_theme/dark_theme.js
// ==/UserScript==

(function () {
    "use strict";

    function applyBlackTheme() {
        const style = document.createElement("style");
        style.id = "chatgpt-true-black-theme";
        style.textContent = `
            .dark {
                --bg-primary: #000000 !important;
                --bg-elevated-secondary: #000000 !important;
                --sidebar-surface-primary: #000000 !important;
                --main-surface-primary: #000000 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Apply immediately
    applyBlackTheme();

    console.log("[ChatGPT Dark] True black theme applied");
})();
