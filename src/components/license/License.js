import React, { useState } from 'react';
import l1 from "./images/license1.png";
import l2 from "./images/license2.png";
import l3 from "./images/license3.png";
import l4 from "./images/new1.png";
import l5 from "./images/new2.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function License(props) {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#213972] py-12 px-4 sm:px-6 lg:px-8">
            {/* First License Section */}
            <section className="mb-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl mb-12">
                        Buxoro Xalqaro Universiteti Litsenziyasi
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img
                                onClick={() => handleImageClick(l1)}
                                src={l1}
                                alt="License 1"
                                className="w-full max-w-md rounded-lg shadow-2xl border-4 border-[#f7c414]"
                            />
                        </div>
                        <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img
                                onClick={() => handleImageClick(l2)}
                                src={l2}
                                alt="License 2"
                                className="w-full max-w-md rounded-lg shadow-2xl border-4 border-[#f7c414]"
                            />
                        </div>
                        <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img
                                onClick={() => handleImageClick(l3)}
                                src={l3}
                                alt="License 3"
                                className="w-full max-w-md rounded-lg shadow-2xl border-4 border-[#f7c414]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Second License Section */}
            <section>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl mb-12">
                        Buxoro Xalqaro Universiteti Doktarantura Litsenziyasi
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img
                                onClick={() => handleImageClick(l4)}
                                src={l4}
                                alt="Doctorate License 1"
                                className="w-full max-w-md rounded-lg shadow-2xl border-4 border-[#f7c414]"
                            />
                        </div>
                        <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img
                                onClick={() => handleImageClick(l5)}
                                src={l5}
                                alt="Doctorate License 2"
                                className="w-full max-w-md rounded-lg shadow-2xl border-4 border-[#f7c414]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Enlarged License"
                        className="max-w-full max-h-[80vh] object-contain"
                    />
                )}
            </Modal>

            <style jsx global>{`
                .customOverlay {
                    background: rgba(0, 0, 0, 0.8) !important;
                    backdrop-filter: blur(5px);
                }
                .customModal {
                    background: transparent !important;
                    box-shadow: none !important;
                    padding: 0 !important;
                    max-width: 90% !important;
                    width: auto !important;
                }
            `}</style>
        </div>
    );
}

export default License;