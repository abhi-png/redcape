import React from "react";
import { cardone } from "../data";

const CardOne = () => {
    return (
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 mt-14 mb-14 px-20 mx-auto w-full max-w-7xl p-5 relative">
            {cardone.map((data) => (
                <div className="text-center group" key={data.id}>
                    <div className="flex justify-center relative">
                        <data.icon className="text-7xl text-white bg-blue-gray-900 p-4 rounded-full relative group-hover:border-2 group-hover:bg-cyan-600 z-10" />
                        <div className="absolute h-32 w-32 border-cyan-600 border-4 rounded-full -mt-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h1 className="text-2xl mt-10 transition-colors duration-300 group-hover:text-cyan-600">{data.title}</h1>
                    <p className="mt-2 text-sm/[20px] text-gray-600">{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default CardOne