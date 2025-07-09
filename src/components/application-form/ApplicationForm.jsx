
import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Replace with your actual API call
            const response = await fetch('/api/v1/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFormData({ name: "", phone: "", message: "" });
            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Error occurred while sending the message:", error);
            alert("Server bilan aloqa o'rnatishda xatolik yuz berdi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="items-center py-4 px-2 flex flex-wrap  justify-around  bg-white rounded-lg shadow-md">
            <div>
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-xl font-bold text-gray-800">Ariza topshirish</h2>
                </div>

                <p className="text-gray-600 mb-6">
                    Hoziroq ariza qoldiring - biz sizga imkoniyatlar haqida<br />
                    batafsil ma'lumot beramiz!
                </p>
            </div>

            <div>
                {submitSuccess ? (
                    <div className="p-4 mb-4 bg-green-100 text-green-700 rounded">
                        Malumotlaringizni qoldirganingiz uchun raxmat.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                       <div className={"flex flex-wrap gap-2"}>
                           <div>
                               <input
                                   type="text"
                                   name="name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   placeholder="Ism Familyangiz"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required
                               />
                           </div>

                           <div>
                               <input
                                   type="tel"
                                   name="phone"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   placeholder="Telefon raqamingiz"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required
                               />
                           </div>
                       </div>

                        <div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringiz"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;