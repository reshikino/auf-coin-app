import TonConnect from "@tonconnect/sdk";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const renderInitialScreen = () => {
        app.innerHTML = `
            <div class="container">
                <h1>Connect TON Wallet</h1>
                <button class="button" id="connectWallet">Connect Wallet</button>
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
            </div>
        `;

        document.getElementById('connectWallet').addEventListener('click', connectWallet);
        document.getElementById('nextButton').addEventListener('click', renderComingSoonScreen);
    };

    const connectWallet = () => {
        const tonConnect = new TonConnect({
            manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json'
        });

        tonConnect.connectWallet()
            .then(wallet => {
                console.log('Connected to wallet', wallet);
            })
            .catch(error => {
                console.error('Failed to connect to wallet', error);
            });
    };

    const renderComingSoonScreen = () => {
        app.innerHTML = `
            <div class="container">
                <h1>Loading...</h1>
                <p>Coming soon</p>
            </div>
        `;
    };

    renderInitialScreen();
});
