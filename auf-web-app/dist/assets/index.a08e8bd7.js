const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};l();document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("app"),n=()=>{o.innerHTML=`
            <div class="container">
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
            </div>
        `,document.getElementById("nextButton").addEventListener("click",i)},i=()=>{o.innerHTML=`
            <div class="container">
                <h1>Loading...</h1>
                <p>Coming soon</p>
            </div>
        `};n()});
