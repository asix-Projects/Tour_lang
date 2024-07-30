import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<div className="bg-[#004290] flex flex-col items-center">
			<Image width={900} height={200} src="/footerimg.png" alt="" className="mb-10" />
			<div className="flex items-center justify-between w-[70%]">
				{/* phone */}
				<div className="flex flex-col items-start gap-3">
					<p className="text-white text-xl">📞 +998 77 273 00 17 </p>
					<Image width={150} height={200} src="/icons.png" alt="" />
				</div>
				{/* location */}
				<div>
					<p className="text-white text-lg">
						📍 Toshkent, O'zbekiston <br /> Chilonzor 18/19 uy
					</p>
				</div>
			</div>
			<div className="bg-[#D9D9D9] h-[2px] w-[90%] mt-10 mb-8"></div>
			<div>
				<p className="flex item-center justify-center  mb-7 text-white">DarmonTravel 2024</p>
			</div>
		</div>
	);
}
