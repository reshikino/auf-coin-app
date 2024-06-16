const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};s();document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("app"),t=()=>{i.innerHTML=`
            <h1>Connect TON Wallet</h1>
            <div id="ton-connect"></div>
            <h2>Select Language</h2>
            <select id="appLanguage">
                <option value="en">English</option>
                <option value="ru">\u0420\u0443\u0441\u0441\u043A\u0438\u0439</option>
            </select>
            <h2>Languages You Know</h2>
            <select id="userLanguages" multiple>
                <option value="en">English</option>
                <option value="ru">\u0420\u0443\u0441\u0441\u043A\u0438\u0439</option>
                <option value="es">Espa\xF1ol</option>
                <option value="fr">Fran\xE7ais</option>
                <option value="de">Deutsch</option>
                <!-- \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u044F\u0437\u044B\u043A\u0438 \u043F\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 -->
            </select>
            <button class="button" id="nextButton">Next</button>
        `,new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json",buttonRootId:"ton-connect"}),document.getElementById("nextButton").addEventListener("click",()=>{o()})},o=()=>{i.innerHTML=`
            <h1>Loading...</h1>
            <p>Coming soon</p>
        `};(async()=>{try{const e=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json"});await e.restoreConnection(),e.connected?o():t()}catch(e){console.error("Error checking wallet connection:",e),t()}})()});
