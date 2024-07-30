import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const About = () => {
	const t = useTranslations("NavBar");

	return (
		<div className="flex flex-col items-center mt-7 px-10 mb-10">
			<p className="text-[#004290] text-2xl font-bold">{t("aboutus")}</p>
			<div className="flex items-center justify-between px-10">
				<div className="flex flex-col gap-10 mt-10">
					<p className="text-[#004290]">{t("about1")}</p>

					<p className="text-[#004290]">
						{t("about2")}
					</p>
					<p className="text-[#004290]">
					{t("about3")}
					</p>
				</div>
				<div>
					<Image width={2400} height={300} src="/baout.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
