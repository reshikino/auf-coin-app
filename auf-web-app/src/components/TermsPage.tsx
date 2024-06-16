import React from 'react';

const TermsPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Please accept the terms and conditions to proceed.</p>
            <button onClick={onNext}>Accept and Continue</button>
        </div>
    );
};

export default TermsPage;
