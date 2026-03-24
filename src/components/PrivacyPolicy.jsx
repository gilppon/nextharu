import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="panel-content space-y-6 text-left pb-10">
            <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                <p className="text-gray-300">We collect information you provide directly to us when you create an account, such as your email address and profile information.</p>
                <p className="mt-2 text-gray-300">We also collect gameplay data, device information, and usage statistics to improve our service.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">2. How We Use Information</h2>
                <p className="text-gray-300">Your information is used to provide, maintain, and improve our services, authenticate users, and personalize your experience.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">3. Data Sharing</h2>
                <p className="text-gray-300">We do not sell your personal data to third parties.</p>
                <p className="mt-2 text-gray-300">We may share data with service providers who assist us in operating our application, subject to confidentiality agreements.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">4. Security</h2>
                <p className="text-gray-300">We take reasonable measures to protect your personal information from unauthorized access, loss, or alteration.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
                <p className="text-gray-300">
                    If you have questions about this Privacy Policy, please contact us at
                    <a href="mailto:support@next-haru.com" className="text-blue-500 hover:underline ml-1">support@next-haru.com</a>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
