import React from 'react';

const PaymentChannels = () => {
    return (
        <div>
            <h2 className="font-bold text-xl mb-4 uppercase">
                Payment Channels
            </h2>

            <div className="flex flex-wrap gap-6">
                <img className="h-8 sm:h-10 md:h-12" src="/image/visa.png" alt="Visa" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/mastercard.png" alt="Mastercard" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/nogod.png" alt="Nogod" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/bkash.png" alt="Bkash" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/roket.png" alt="Rocket" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/upay.png" alt="Upay" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/surecash.png" alt="SureCash" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/taptap.png" alt="TapTap" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/cellfin.png" alt="CellFin" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/dajbangla.png" alt="DajBangla" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/citybank.png" alt="City Bank" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/islamibank.png" alt="Islami Bank" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/brackbank.png" alt="Brac Bank" />
                <img className="h-8 sm:h-10 md:h-12" src="/image/ucb.png" alt="UCB Bank" />
            </div>
        </div>

    );
};

export default PaymentChannels;