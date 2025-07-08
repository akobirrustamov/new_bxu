import React from 'react';

function UsefulInfo() {
    return (
        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Foydali malumotlar
                </h2>

                <p className="text-gray-600 mb-8 text-base md:text-lg">
                    Bu nafaqat talebalar heyoti markazi, balki turli madaniyatlar kesishmasi hamda umrbod do'stlar orttiriladgan dargoh.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <div className="font-bold text-gray-800">Hemis platformasi</div>
                        <div className="font-bold text-gray-800">E-kutubxona</div>
                        <div className="font-bold text-gray-800">Shartnoma olish</div>
                    </div>

                    <div className="space-y-4">
                        <div className="font-bold text-gray-800">Dars jadvali</div>
                        <div className="font-bold text-gray-800">Taklif va shikoyatlar</div>
                        <div className="font-bold text-gray-800">Talabalar yotoqxonasi</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsefulInfo;