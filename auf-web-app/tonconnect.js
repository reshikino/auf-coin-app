let tonConnectUI;

export function getTonConnectUI() {
    if (!tonConnectUI) {
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json',
            buttonRootId: 'ton-connect'
        });
    }
    return tonConnectUI;
}
