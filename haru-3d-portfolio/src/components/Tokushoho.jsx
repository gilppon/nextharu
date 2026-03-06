import React from 'react';

const Tokushoho = () => {
    const rows = [
        { label: 'Company Name', value: 'Next Haru' },
        { label: 'Representative', value: 'GILHO SHIN' },
        { label: 'Address', value: '1-7 Daishincho, Hadano-shi, Kanagawa 257-0034, Japan' },
        {
            label: 'Contact Email',
            value: (
                <a href="mailto:support@next-haru.com" className="text-blue-500 hover:underline">
                    support@next-haru.com
                </a>
            ),
        },
        { label: 'Phone Number', value: '+81 80-8879-0002' },
        { label: 'Pricing', value: 'As displayed on each product page' },
        { label: 'Additional Costs', value: 'Internet connection fees are borne by the customer' },
        { label: 'Payment Method', value: 'Credit Card (via Stripe)' },
        { label: 'Payment Timing', value: 'Charged immediately at the time of purchase' },
        { label: 'Delivery', value: 'Available immediately after payment is completed' },
        { label: 'Returns & Cancellations', value: 'Not applicable for digital products in principle (see Refund Policy)' },
    ];

    return (
        <div className="panel-content space-y-4 text-left pb-10">
            <h2 className="text-xl font-bold text-white mb-4 truncate" title="Specified Commercial Transactions Act">
                Specified Commercial Transactions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 text-sm sm:text-base">
                {rows.map((row, idx) => (
                    <React.Fragment key={idx}>
                        <div className="font-medium text-gray-300 sm:col-span-1 border-b border-gray-700 pb-2 sm:border-none sm:pb-0">
                            {row.label}
                        </div>
                        <div className="sm:col-span-2 text-white flex items-center border-b border-gray-700 pb-2 sm:border-none sm:pb-0 mb-4 sm:mb-0">
                            {row.value}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Tokushoho;
