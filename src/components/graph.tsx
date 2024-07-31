import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Graph = () => {
	const t = useTranslations("");

	return (
		<div className="flex flex-col items-center mt-7 p-4 px-10 bg-[#f1f3ff]">
			<p className="text-[#004290] text-2xl mb-20 mt-10 font-bold">{t("pref")}</p>
			<Image width={900} height={200} src="/nextpiece.png" alt="" />
		</div>
	);
};

export default Graph;
