import React from 'react';

const Tokushoho = () => {
    const rows = [
        {
            label: 'Company Name / 事業者の名称',
            value: 'Next Haru',
        },
        {
            label: 'Representative / 運営統括責任者',
            value: 'GILHO SHIN',
        },
        {
            label: 'Address / 所在地',
            value: (
                <>
                    1-7 Daishincho, Hadano-shi, Kanagawa 257-0034, Japan
                    <br />
                    〒257-0034 神奈川県秦野市大秦町1-7
                </>
            ),
        },
        {
            label: 'Contact Email / 連絡先メールアドレス',
            value: (
                <a href="mailto:support@next-haru.com" className="text-blue-500 hover:underline">
                    support@next-haru.com
                </a>
            ),
        },
        {
            label: 'Phone Number / 電話番号',
            value: '+81 80-8879-0002 (080-8879-0002)',
        },
        {
            label: 'Pricing / 販売価格',
            value: (
                <>
                    As displayed on each product page
                    <br />
                    各商品ページに記載
                </>
            ),
        },
        {
            label: 'Additional Costs / 商品代金以外に必要な料金',
            value: (
                <>
                    Internet connection fees are borne by the customer
                    <br />
                    インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にてご負担ください。
                </>
            ),
        },
        {
            label: 'Payment Method / 支払方法',
            value: (
                <>
                    Credit Card (via Stripe)
                    <br />
                    クレジットカード決済（Stripe経由）
                </>
            ),
        },
        {
            label: 'Payment Timing / 代金の支払時期',
            value: (
                <>
                    Charged immediately at the time of purchase
                    <br />
                    ご購入時に即時決済されます。
                </>
            ),
        },
        {
            label: 'Delivery / 商品の引渡時期',
            value: (
                <>
                    Available immediately after payment is completed
                    <br />
                    決済完了後、直ちにご利用いただけます。
                </>
            ),
        },
        {
            label: 'Returns & Cancellations / 返品・キャンセルに関する特約',
            value: (
                <>
                    Not applicable for digital products in principle (see Refund Policy)
                    <br />
                    デジタルコンテンツという商品の性質上、原則として購入後の返品・キャンセルはお受けできません。（詳細は返金ポリシーをご確認ください）
                </>
            ),
        },
    ];

    return (
        <div className="panel-content space-y-4 text-left pb-10">
            <h2 className="text-xl font-bold text-white mb-1" title="Specified Commercial Transactions Act">
                Specified Commercial Transactions
            </h2>
            <p className="text-sm text-gray-400 mb-4">特定商取引法に基づく表記</p>
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
