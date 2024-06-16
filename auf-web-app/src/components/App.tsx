import React, { useState } from 'react';
import WalletConnectPage from './WalletConnectPage';
import LanguageSelectionPage from './LanguageSelectionPage';
import TermsPage from './TermsPage';
import LoadingPage from './LoadingPage';

const App: React.FC = () => {
    const [page, setPage] = useState('wallet');

    const handleNext = () => {
        if (page === 'wallet') {
            setPage('language');
        } else if (page === 'language') {
            setPage('terms');
        } else if (page === 'terms') {
            setPage('loading');
        }
    };

    return (
        <div>
            {page === 'wallet' && <WalletConnectPage onNext={handleNext} />}
            {page === 'language' && <LanguageSelectionPage onNext={handleNext} />}
            {page === 'terms' && <TermsPage onNext={handleNext} />}
            {page === 'loading' && <LoadingPage />}
        </div>
    );
};

export default App;
