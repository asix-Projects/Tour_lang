import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="relative w-full h-[500px]">
			{" "}
			{/* Adjust height as needed */}
			{/* Background Image */}
			<Image
				src="/Travel_Concepts_6 copy 1.png"
				alt="Traveller"
				objectFit="cover"
				width={700}
				height={400}
				className="absolute right-20  h-full"
			/>
			{/* Foreground Image */}
			<Image
				src="/Traveller 1.png"
				alt="Travel Concepts"
				width={400}
				height={400}
				className="absolute right-[15%] bottom-[40px] "
			/>
			<Image
				src="/Frame 3.png"
				alt="Travel Concepts"
				width={400}
				height={400}
				className="absolute left-[15%] bottom-[40px] "
			/>
		</div>
	);
};

export default Hero;
