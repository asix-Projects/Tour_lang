import { useTranslations } from "next-intl";
import Link from "next/link";

const NavBar = () => {
	const t = useTranslations("NavBar");

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">{t("tours")}</Link>
				</li>
				<li>
					<Link href="/about">{t("aboutUs")}</Link>
				</li>
				<li>
					<Link href="/advantages">{t("ourAdvantages")}</Link>
				</li>
				<li>
					<Link href="/contact">{t("contact")}</Link>
				</li>
				<li>
					<Link href="/uz">
						<img src="/uz.png" alt="Uzbek" />
					</Link>
				</li>
				<li>
					<Link href="/en">
						<img src="/en.png" alt="English" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
