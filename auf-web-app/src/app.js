document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
  });

  tonConnectUI.onStatusChange((wallet) => {
    if (wallet) {
      showLanguageSelection();
    }
  });

  function showLanguageSelection() {
    const languages = ['English', 'Russian', 'Spanish', 'Chinese', 'French', 'German', 'Japanese', 'Korean', 'Portuguese', 'Italian'];
    const languageOptions = languages.map(lang => <label><input type="checkbox" value=""></label>).join('<br>');
    
    root.innerHTML = 
      <h1>Select Your Language</h1>
      <div id="languages">
        
      </div>
      <button id="nextButton">Next</button>
    ;

    document.getElementById('nextButton').addEventListener('click', showTermsOfService);
  }

  function showTermsOfService() {
    root.innerHTML = 
      <h1>Terms of Service</h1>
      <p>Please accept our terms of service to continue.</p>
      <button id="acceptButton">Accept</button>
    ;

    document.getElementById('acceptButton').addEventListener('click', showComingSoon);
  }

  function showComingSoon() {
    root.innerHTML = 
      <h1>Coming Soon</h1>
      <p>Our application is coming soon. Stay tuned!</p>
    ;
  }
});
