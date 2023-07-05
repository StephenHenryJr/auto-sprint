"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, Reserve, or Rent a Car - Swiftly and Effortlessly!
        </h1>
        <p className="hero__subtitle">
          Simplify your car rental experience with our seamless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-yellow-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>

    </div>
  );
};

export default Hero;
