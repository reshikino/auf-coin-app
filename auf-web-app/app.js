import { getTonConnectUI } from './tonconnect.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const renderInitialScreen = () => {
        app.innerHTML = `
            <h1>Connect TON Wallet</h1>
            <div id="ton-connect"></div>
            <h2>Select Language</h2>
            <select id="appLanguage">
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
            <h2>Languages You Know</h2>
            <select id="userLanguages" multiple>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <!-- Добавьте другие языки по необходимости -->
            </select>
            <button class="button" id="nextButton">Next</button>
        `;

        // Инициализация TonConnectUI после добавления элемента в DOM
        const tonConnectUI = getTonConnectUI();

        document.getElementById('nextButton').addEventListener('click', () => {
            renderComingSoonScreen();
        });
    };

    const renderComingSoonScreen = () => {
        app.innerHTML = `
            <h1>Develop process</h1>
            <p>Coming soon</p>
        `;
    };

    const checkWalletConnection = async () => {
        try {
            const tonConnectUI = getTonConnectUI();

            // Проверка статуса подключения
            if (tonConnectUI.wallet) {
                renderComingSoonScreen();
            } else {
                renderInitialScreen();
            }
        } catch (error) {
            console.error('Error checking wallet connection:', error);
            renderInitialScreen();
        }
    };

    checkWalletConnection();
});
