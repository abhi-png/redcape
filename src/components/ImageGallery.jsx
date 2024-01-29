import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showData } from "../redux/apislice/imageDataSlice";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ImageGallery = () => {
    const dispatch = useDispatch();
    const { images, loading } = useSelector((state) => state.image);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(showData());
    }, []);

    if (loading) {
        return (
            <h2 className="text-white text-xl pt-20 text-center">Loading ...</h2>
        );
    }

    const openPopup = (image) => {
        setSelectedImage(image);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };


    return (
        <div className="bg-[#f6faf9] p-5">
            <div className="mx-auto w-full max-w-7xl">
                <div className="text-center py-10">
                    <h1 className="text-gray-800 font-bold text-2xl lg:text-4xl">Let Them Know Why you're the Best</h1>
                    <p className="text-gray-800 font-light">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                    {images.map((item) => (
                        <div key={item.id} className="relative group">
                            <img
                                src={item.imageurl}
                                alt={item.name}
                                className="max-w-full max-h-full rounded-lg hover:opacity-80"
                            />
                            <p
                                className="opacity-0 absolute inset-0 flex justify-center items-center text-white text-3xl font-bold bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                onClick={() => openPopup(item)}
                            >
                                <FiPlusCircle />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90" onClick={closePopup}>
                    <div className="max-w-[90%] max-h-[90%] lg:max-w-[70%] lg:max-h-[70%] relative">
                        <IoMdCloseCircleOutline className="absolute top-0 right-0 m-4 text-white cursor-pointer" size={30} onClick={closePopup} />
                        <img
                            src={selectedImage.imageurl}
                            alt={selectedImage.name}
                            className="max-w-[20rem] max-h-full lg:max-w-[50rem] cursor-pointer rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageGallery