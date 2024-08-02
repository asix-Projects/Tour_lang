import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Graph = () => {
	const t = useTranslations('');

	return (
		<div className="flex flex-col items-center w-[100%] mt-7 p-4 px-10 bg-[#f1f3ff]">
			<p className="text-[#004290] text-2xl mb-20 mt-10 font-bold">{t('pref')}</p>
			{/* main div for cards */}
			<div className="flex flex-col w-full gap-20">
				{/* first line four box */}
				<div className="flex  justify-between w-full px-[10%] ">
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col items-center w-[200px] justify-center gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1.png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl"> {t('first_box')}</p>
						</div>
					</div>
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col items-center w-[200px] justify-center gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1 (1).png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl"> {t('second_box')}</p>
						</div>
					</div>
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col items-center w-[200px] justify-center gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1 (2).png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl">
								{' '}
								Keng <br /> yo'nalishlar <br /> tanlovi
							</p>
						</div>
					</div>
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col items-center justify-center w-[200px] gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1 (3).png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl">
								{' '}
								Ishonchlilik <br />
								va <br /> xavfsizlik{' '}
							</p>
						</div>
					</div>
				</div>
				{/* Second line two box */}
				<div className="flex  justify-between w-full px-[27%] ">
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col w-[200px] items-center justify-center gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1 (4).png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl">
								{' '}
								Raqobatbardosh <br /> narxlar
							</p>
						</div>
					</div>
					{/* box */}
					<div className="bg-white rounded-2xl flex flex-col w-[200px] items-center justify-center gap-6 p-3  px-6">
						{/* img */}
						<div>
							<Image width={100} height={100} src="/sfdf 1 (5).png" alt="Rasm user" />
						</div>
						{/* text */}
						<div>
							<p className="text-[#004290] font-bold text-xl">
								{' '}
								24/7 qo'llab- <br />
								quvvatlash
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Graph;
