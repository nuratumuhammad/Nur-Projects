import React from "react";
import GalleryImg1 from "../assets/gallery-img/gallery-1.jpg";
import GalleryImg2 from "../assets/gallery-img/gallery-2.jpg";
import GalleryImg3 from "../assets/gallery-img/gallery-3.jpg";
import GalleryImg4 from "../assets/gallery-img/gallery-4.jpg";
import GalleryImg5 from "../assets/gallery-img/gallery-5.jpg";
import GalleryImg6 from "../assets/gallery-img/gallery-6.jpg";
import GalleryImg7 from "../assets/gallery-img/gallery-7.jpg";
import GalleryImg8 from "../assets/gallery-img/gallery-8.jpg";
import GalleryImg9 from "../assets/gallery-img/gallery-9.jpg";
import GalleryImg10 from "../assets/gallery-img/gallery-10.jpg";
import GalleryImg11 from "../assets/gallery-img/gallery-11.jpg";
import GalleryImg12 from "../assets/gallery-img/gallery-12.jpg";
import GalleryImg13 from "../assets/gallery-img/gallery-13.jpg";
import GalleryImg14 from "../assets/gallery-img/gallery-14.jpg";
import GalleryImg15 from "../assets/gallery-img/gallery-15.jpg";
import GalleryImg16 from "../assets/gallery-img/gallery-16.jpg";
import Heading from "../components/Heading";

const Gallery = () => {
  return (
    <section
      className="Gallery w-full h-auto 2xl:h-96 my-8 mx-auto "
      id="gallery"
    >
      <div className="container mx-auto w-full h-full  p-5 flex flex-col items-center gap-3 justify-between shadow-2xl bg-white">
        <Heading title="View our" titleSpan="Gallery" />

        <div className="row .gallery-row ">
          <figure className="col-span-3">
            <img
              src={GalleryImg11}
              alt="Gallery img 1"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg6}
              alt="Gallery img 2"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg8}
              alt="Gallery img 3"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg14}
              alt="Gallery img 4"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg9}
              alt="Gallery img 5"
              className="w-full h-full object-center"
            />
          </figure>

          <figure className="col-span-3">
            <img
              src={GalleryImg4}
              alt="Gallery img 6"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg3}
              alt="Gallery img 7"
              className="w-full h-full object-center"
            />
          </figure>
          <figure className="col-span-3">
            <img
              src={GalleryImg7}
              alt="Gallery img 8"
              className="w-full h-full object-center"
            />
          </figure>
          {/* <figure className="">
            <img src={GalleryImg9} alt="Gallery img 9" />
          </figure>
          <figure className="">
            <img src={GalleryImg15} alt="Gallery img 10" />
          </figure> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
