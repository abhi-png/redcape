import { Button } from "@material-tailwind/react"
import React from "react"

const VideoCard = () => {
    return (
        <div className="mb-14 p-5 bg-[#444643]">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto my-5">
                <div>
                    <iframe 
                        className="h-[210px] w-[370px] md:h-[280px] md:w-[500px]"
                        src="https://www.youtube.com/embed/LXb3EKWsInQ?si=vj0prA7TuQjLXr5t" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white">What Are You Waiting For?</h1>
                    <h1 className="text-3xl font-bold text-white">Start It Today!</h1>
                    <p className="text-white mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Button className="bg-cyan-600 mt-8">FIND OUT MORE</Button>
                </div>
            </div>
        </div>
    )
}

export default VideoCard