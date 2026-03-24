import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="panel-content space-y-6 text-left pb-10">
            <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">1. Digital Product Policy</h2>
                <p className="text-gray-300">All purchases are digital goods and are generally non-refundable.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">2. Refund May Be Granted If</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Duplicate charges</li>
                    <li>Technical failure preventing delivery</li>
                    <li>Fraudulent transactions</li>
                    <li>Legal requirement</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">3. Request Deadline</h2>
                <p className="text-gray-300">Refund requests must be submitted within 7 days of purchase.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-white mb-3">4. How to Request</h2>
                <p className="mb-2 text-gray-300">
                    Email: <a href="mailto:support@next-haru.com" className="text-blue-500 hover:underline">support@next-haru.com</a>
                </p>
                <p className="font-medium mb-1 text-white">Include:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Name</li>
                    <li>Order ID</li>
                    <li>Purchase date</li>
                    <li>Issue description</li>
                </ul>
                <p className="mt-3 text-gray-500 dark:text-gray-400">Approved refunds are processed within 5–10 business days.</p>
            </section>
        </div>
    );
};

export default RefundPolicy;
