import React from "react";
import { Carousel } from "@material-tailwind/react";

const HomeSlider = () => {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            className=""
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src="https://images.unsplash.com/photo-1675253876075-913184e041a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 1"
                className="w-full object-cover h-[35rem]"
            />
            <img
                src="https://images.unsplash.com/photo-1676015575099-4b29c884cc82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 2"
                className="w-full object-cover h-[35rem]"
            />
            <img
                src="https://images.unsplash.com/photo-1682272000859-e774b41be0e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 3"
                className="w-full object-cover h-[35rem]"
            />
        </Carousel>
    )
}

export default HomeSlider