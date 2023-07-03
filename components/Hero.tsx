import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Discover, Reserve, or Rent a Car - Swiftly and Effortlessly!
            </h1>
            <p className="hero__subtitle">
            Simplify your car rental experience with our seamless booking process. 
            </p>
        </div>

        <CustomButton /> 
    </div>
  )
}

export default Hero