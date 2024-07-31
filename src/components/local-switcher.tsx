"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
	const router = useRouter();
	const [selectedLanguage, setSelectedLanguage] = useState("uz");

	useEffect(() => {
		const path = window.location.pathname;
		if (path.startsWith("/en")) {
			setSelectedLanguage("en");
		} else {
			setSelectedLanguage("uz");
		}
	}, []);

	const handleChange = (event: any) => {
		const language = event.target.value;
		setSelectedLanguage(language);
		router.push(`/${language}`);
	};

	return (
		<div className="relative inline-block">
			<select
				value={selectedLanguage}
				onChange={handleChange}
				className="flex items-center p-0 bg-transparent border-none cursor-pointer"
				aria-label="Select Language"
			>
				<option value="en">English</option>
				<option value="uz">Uzbek</option>
			</select>
		</div>
	);
}
