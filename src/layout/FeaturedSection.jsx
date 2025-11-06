import React from "react";
import ProfileImg6 from "../assets/profile/Profile (6).jpg";
import ProfileImg7 from "../assets/profile/Profile (7).jpg";
import ProfileImg8 from "../assets/profile/Profile (8).jpg";
import ProfileImg9 from "../assets/profile/Profile (9).jpg";
import ProfileImg10 from "../assets/profile/Profile (10).jpg";
import ProfileImg11 from "../assets/profile/Profile (11).jpg";
import ProfileImg12 from "../assets/profile/Profile (12).jpg";
import Gallery10 from "../assets/gallery-img/gallery-14.jpg";
import Gallery11 from "../assets/gallery-img/gallery-15.jpg";
import Heading from "../components/Heading";
import Card from "../components/Card";

const FeaturedSection = () => {
  return (
    <section className="featured w-full h-auto my-8 mx-auto " id="featured">
      <div className="container">
        <Heading title="Featured" titleSpan="Photography" />
        <div className="row featured-row ">
          <Card
            cardImg={ProfileImg6}
            cardDate="12th jan 2025"
            cardTitle="Nature"
          />
          <Card
            cardImg={ProfileImg7}
            cardDate="15th march 2025"
            cardTitle="Lifestyle"
          />
          <Card
            cardImg={ProfileImg11}
            cardDate="24th april 2025"
            cardTitle="Ocean"
          />
          <Card
            cardImg={ProfileImg12}
            cardDate="21st june 2025"
            cardTitle="Beauty"
          />
          <Card
            cardImg={ProfileImg8}
            cardDate="12th Dec 2025"
            cardTitle="Joy"
          />
          <Card
            cardImg={ProfileImg9}
            cardDate="11th july 2025"
            cardTitle="Woods"
          />
          <Card
            cardImg={ProfileImg10}
            cardDate="12th oct 2025"
            cardTitle="Explore"
          />
          <Card
            cardImg={Gallery10}
            cardDate="12th jan 2025"
            cardTitle="Mountains"
          />
          <Card
            cardImg={Gallery11}
            cardDate="12th jan 2025"
            cardTitle="Forest"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
