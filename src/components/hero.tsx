import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("NavBar");

	return (
		<div className="relative w-full h-[500px]">
			{" "}
			<div className="absolute left-[10%] top-[15%]">
				<p className="text-[#004290] text-[63px] font-bold">
					{t("dunyosizni")} <br /> {t("kutmoda")}
				</p>
				<button className="border-none rounded-lg p-3 text-2xl bg-green-500 text-white cursor-pointer flex items-center justify-center">
					{t("order")}
				</button>
			</div>
			<Image
				src="/Travel_Concepts_6 copy 1.png"
				alt="Traveller"
				objectFit="cover"
				width={700}
				height={400}
				className="absolute right-20  h-full"
			/>
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
