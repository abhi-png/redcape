import React from "react";
import HomeSlider from "../components/HomeSlider"
import BannerMessage from "../components/BannerMessage"
import CardOne from "../components/CardOne"
import CardTwo from "../components/CardTwo"
import VideoCard from "../components/VideoCard"
import Partner from "../components/Partner"
import ImageGallery from "../components/ImageGallery"

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <BannerMessage />
            <CardOne />
            <ImageGallery />
            <CardTwo />
            <VideoCard />
            <Partner />
        </div>
    )
}

export default Home