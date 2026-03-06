import React from 'react';

const TermsOfService = () => {
    return (
        <div className="panel-content space-y-6 text-left pb-10">
            <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-300">By accessing or using Next Haru Portfolio ("Service"), you agree to be bound by these Terms of Service.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
                <p className="text-gray-300">The Service provides online web-based game content and digital goods.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">3. User Accounts</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Users are responsible for maintaining account security.</li>
                    <li>You must provide accurate information.</li>
                    <li>We may suspend accounts for violations.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">4. Prohibited Conduct</h2>
                <p className="mb-2 text-gray-300">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-2 text-gray-300">
                    <li>Use cheats, bots, automation tools</li>
                    <li>Exploit bugs</li>
                    <li>Attempt hacking or reverse engineering</li>
                    <li>Conduct payment fraud</li>
                </ul>
                <p className="text-gray-300">Violation may result in immediate suspension.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
                <p className="mb-2 text-gray-300">All content including code, artwork, characters, UI, and branding belongs to Next Haru.</p>
                <p className="text-gray-300">Unauthorized copying or distribution is prohibited.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">6. Payments</h2>
                <p className="mb-2 text-gray-300">Payments are processed via secure third-party providers such as Stripe.</p>
                <p className="text-gray-300">We do not store full credit card information.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">7. Termination</h2>
                <p className="text-gray-300">We may suspend or terminate access at our discretion for violations.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
                <p className="mb-2 text-gray-300">The Service is provided "as is."</p>
                <p className="text-gray-300">We are not liable for indirect or consequential damages.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">9. Governing Law</h2>
                <p className="text-gray-300">These Terms shall be governed by the laws of Japan.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
                <p className="text-gray-300">
                    Email: <a href="mailto:support@next-haru.com" className="text-blue-500 hover:underline">support@next-haru.com</a>
                </p>
            </section>
        </div>
    );
};

export default TermsOfService;
