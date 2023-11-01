import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState<boolean>(false);

    useEffect(() => {
        setConsentGiven(!!localStorage.getItem('cookieConsent'));
    }, []);

    const giveConsent = (): void => {
        localStorage.setItem('cookieConsent', 'true');
        setConsentGiven(true);
    };

    if (consentGiven) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 m-2 bg-white text-gray-600 p-4 z-50 shadow-2xl">
            <div className="flex flex-col justify-between items-center gap-1">
                <img src="/cookie.svg" alt="Cookie icon" className='w-16 h-16' />
                <div className="text-md font-semibold">
                    We use cookies
                </div>
                <div className="text-sm mb-2">
                    Please accept to continue using the site.
                </div>
                <div className='flex justify-between w-full px-4'>
                    <button
                        className=" px-3 py-1 text-tertiary-500 border border-tertiary-500"
                        onClick={() => window.location.href = "/privacy-and-cookie-policy#cookie-policy"}>
                        Learn More
                    </button>
                    <button
                        className="bg-tertiary-500 px-3 py-1 text-white"
                        onClick={() => giveConsent()}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
