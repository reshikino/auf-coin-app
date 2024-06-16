import React from 'react';

const WalletConnectPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    return (
        <div>
            <div id="ton-connect"></div>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default WalletConnectPage;
