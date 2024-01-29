import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousels = () => {

   const imgData = [
      {
         id: 1,
         imgUrl: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         alt: "First Slide"
      },
      {
         id: 2,
         imgUrl: "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         alt: "Second Slide"
      },
      {
         id: 3,
         imgUrl: "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         alt: "Third Slide"
      },
   ];

   return (
      <Carousel>
         {imgData.map((data) => (
            <Carousel.Item key={data.id}>
               <img
                  className="d-block w-100 img-h"
                  src={data.imgUrl}
                  alt={data.alt}
               />
            </Carousel.Item>
         ))}
      </Carousel>
   )
}

export default HomeCarousels