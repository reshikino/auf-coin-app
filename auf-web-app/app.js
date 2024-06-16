document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Инициализация TonConnectUI
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json',
        buttonRootId: 'ton-connect'
    });

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

        document.getElementById('nextButton').addEventListener('click', () => {
            renderComingSoonScreen();
        });
    };

    const renderComingSoonScreen = () => {
        app.innerHTML = `
            <h1>Loading...</h1>
            <p>Coming soon</p>
        `;
    };

    const checkWalletConnection = async () => {
        try {
            // Проверка статуса подключения
            const connectedWallet = tonConnectUI.wallet;

            if (connectedWallet) {
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
