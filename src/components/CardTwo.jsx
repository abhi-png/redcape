import React from "react"
import { cardtwo } from "../data"

const CardTwo = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
                {cardtwo.map((item) => (
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="rounded-full w-40 h-40"
                                alt={item.title}
                                src={item.img}
                            />
                            <span className="absolute ml-24 -mt-12">
                                <item.icon className="bg-cyan-600 p-3 rounded-full text-6xl text-white" />
                            </span>
                        </div>
                        <h1 className=" text-2xl font-bold text-gray-800 my-5">{item.title}</h1>
                        <p className="text-center text-gray-600 text-sm/[20px] p-5 md:p-0">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardTwo