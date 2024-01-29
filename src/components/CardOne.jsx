import React from "react";
import { cardone } from "../data";

const CardOne = () => {
    return (
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 mt-14 mb-14 px-20 mx-auto w-full max-w-7xl p-5">
            {cardone.map((data) => (
                <div className="text-center" key={data.id}>
                    <div className="flex justify-center">
                        <data.icon className="text-7xl text-white bg-blue-gray-900 hover:bg-cyan-600 p-3 rounded-full"/>
                    </div>
                    <h1 className="text-2xl hover:text-cyan-600 mt-10">{data.title}</h1>
                    <p className="mt-2 text-sm/[20px] text-gray-600">{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default CardOne