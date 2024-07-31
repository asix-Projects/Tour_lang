import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './local-switcher';

const NavBar = () => {
	const t = useTranslations('');

	return (
		<div className="w-[100%]">
			<div className="bg-white shadow-md  w-[100%]">
				<div className="container mx-auto w-full px-4 py-2 flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Image
							width={120}
							height={40}
							src="/Group 2.png"
							alt="Darmon Travel"
							className="h-10 mr-4"
						/>
					</div>
					<ul className="flex space-x-8">
						<li>
							<p className="text-gray-700 hover:text-blue-500">{t('tours')}</p>
						</li>
						<li>
							<p className="text-gray-700 hover:text-blue-500">{t('aboutUs')}</p>
						</li>
						<li>
							<p className="text-gray-700 hover:text-blue-500">{t('ourAdvantages')}</p>
						</li>
						<li>
							<p className="text-gray-700 hover:text-blue-500">{t('contact')}</p>
						</li>
					</ul>

					<div>
						<LanguageSwitcher />
					</div>
				</div>
			</div>{' '}
		</div>
	);
};

export default NavBar;
