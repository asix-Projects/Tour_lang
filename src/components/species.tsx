"use client"; // Indicate that this is a client component

import React, { useRef } from "react";
import "../app/[locale]/globals.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Species = () => {
	// const t = useTranslations("NavBar");

	const tours = [
		{
			image: "/turkiya.png", // Update with the actual image path or URL
			country: "Turkiya",
			route: "Toshkent-Istanbul",
		},
		{
			image: "/misr.png", // Update with the actual image path or URL
			country: "Misr",
			route: "Toshkent-Qohira",
		},
		{
			image: "/dubai.png", // Update with the actual image path or URL
			country: "BAA",
			route: "Toshkent-Dubay",
		},
		{
			image: "/yevropa.png", // Update with the actual image path or URL
			country: "Yevropa",
			route: "Toshkent-Parij",
		},
		{
			image: "/dubai.png", // Update with the actual image path or URL
			country: "BAA",
			route: "Toshkent-Dubay",
		},
		{
			image: "/misr.png", // Update with the actual image path or URL
			country: "Misr",
			route: "Toshkent-Qohira",
		},
		{
			image: "/turkiya.png", // Update with the actual image path or URL
			country: "Turkiya",
			route: "Toshkent-Istanbul",
		},
	];

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
		}
	};

	return (
		<div className="App bg-[#f1f3ff] p-3 ">
			{/* <h1 className="text-center text-3xl font-bold my-4">{t("tours")}</h1> */}
			<h1 className="text-center text-3xl font-bold my-4">Turlar</h1>
			<div className="relative">
				<button
					onClick={scrollLeft}
					className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
				>
					&larr;
				</button>
				<div ref={scrollRef} className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
					{tours.map((tour, index) => (
						<div
							key={index}
							className="flex-none cursor-pointer w-60 p-2 py-4 border rounded-lg shadow-lg"
						>
							<div className="relative w-full h-56">
								<Image
									src={tour.image}
									alt={tour.country}
									layout="fill"
									objectFit="cover"
									className="rounded-t-lg"
								/>
							</div>
							<div className="p-2">
								<h2 className="text-xl font-bold">{tour.country}</h2>
								<p className="text-gray-500">{tour.route}</p>
							</div>
						</div>
					))}
				</div>
				<button
					onClick={scrollRight}
					className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
				>
					&rarr;
				</button>
			</div>
			<div className="flex items-center justify-center mt-4 mb-10">
				<div className="bg-blue-600 rounded-xl w-[70%] text-white py-7 p-4 flex items-center justify-between">
					<div className="text-left">
						<p className="text-[17px]">
							<span className="text-[#00BFFF] font-semibold">15-Noyabrgacha</span> Yevropa uchun tur
							bron qilsangiz
						</p>
						<p className="text-3xl font-bold mt-1">10% chegirmaga ega bo'ling</p>
					</div>
					<div className="flex space-x-6 ">
						<Image
							width={150}
							height={150}
							src="/efill.png" // Replace with actual image path or URL
							alt="Eiffel Tower"
							className="w-20 h-20 rounded-lg object-cover"
						/>
						<Image
							width={400}
							height={400}
							src="/see.png" // Replace with actual image path or URL
							alt="Eiffel Tower"
							className="w-20 h-20 rounded-lg object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Species;
