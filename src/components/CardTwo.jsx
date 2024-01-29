import React, { useState } from "react";
import { cardtwo } from "../data";

const CardTwo = () => {
    const [hideIcons, setHideIcons] = useState(Array(cardtwo.length).fill(false));

    const handleMouseEnter = (index) => {
        const newHideIcons = [...hideIcons];
        newHideIcons[index] = true;
        setHideIcons(newHideIcons);
    };

    const handleMouseLeave = (index) => {
        const newHideIcons = [...hideIcons];
        newHideIcons[index] = false;
        setHideIcons(newHideIcons);
    };

    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
                {cardtwo.map((item, index) => (
                    <div
                        className="relative flex flex-col justify-center items-center group"
                        key={index}
                    >
                        <div className="relative">
                            <img
                                className="rounded-full w-40 h-40"
                                alt={item.title}
                                src={item.img}
                            />
                            <p
                                className="absolute inset-0 rounded-full flex items-center justify-center text-white bg-cyan-600 bg-opacity-0 opacity-0 hover:bg-opacity-100 hover:opacity-100 transition-opacity duration-300"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                Secretary
                            </p>
                            <span className={`absolute ml-24 -mt-12 ${hideIcons[index] ? 'hidden' : ''}`}>
                                <item.icon className="bg-cyan-600 p-3 rounded-full text-6xl text-white" />
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 my-5">{item.title}</h1>
                        <p className="text-center text-gray-600 text-sm/[20px] p-5 md:p-0">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardTwo;
