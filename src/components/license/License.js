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
        <div className="h-full bg-[#213972]">
            <div className="bg-fixed  bg-cover  bg-center h-full">
                <section className=" overlay bg-black bg-opacity-50" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="content">
                                    <h2 className="text-white text-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                                        Buxoro Xalqaro Universiteti Litsenziyasi

                                    </h2>

                                    <div className="flex-wrap flex justify-center">
                                        <div className={"hidden xl:block"}></div>
                                        <div>
                                            <img
                                                onClick={() => handleImageClick(l1)}
                                                width={360}
                                                src={l1}
                                                alt="License 1"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                onClick={() => handleImageClick(l2)}
                                                width={360}
                                                src={l2}
                                                alt="License 2"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                onClick={() => handleImageClick(l3)}
                                                width={360}
                                                src={l3}
                                                alt="License 3"
                                            />
                                        </div>
                                        <div className={"hidden xl:block"}></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" overlay bg-black bg-opacity-50 " data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="content">
                                    <h2 className="text-white text-center font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                                        Buxoro Xalqaro Universiteti Doktarantura Litsenziyasi
                                    </h2>



                                    <div className="my-4 flex flex-wrap justify-center gap-4">
                                        <div className="flex flex-wrap justify-center">
                                            <div className={"hidden xl:block"}></div>
                                            <div>
                                                <img
                                                    onClick={() => handleImageClick(l4)}
                                                    width={360}
                                                    src={l4}
                                                    alt="License 2"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    onClick={() => handleImageClick(l4)}
                                                    width={360}
                                                    src={l5}
                                                    alt="License 2"
                                                />
                                            </div>
                                            <div className={"hidden xl:block"}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Modal open={open} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="dived License"
                        style={{ width: "400px", height: "auto" }}
                    />
                )}
            </Modal>
        </div>
    );
}

export default License;
