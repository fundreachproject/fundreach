import React from 'react';
import DonationForm from '../components/Donation/DonationForm';

const Donate = () => {
    return (
        <div className="container pt-10 pb-40">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Make a <span className="text-gradient">Difference</span></h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Your secure donation helps us provide resources, education, and support to those who need it most.
                </p>
            </div>
            <DonationForm />
        </div>
    );
};

export default Donate;
