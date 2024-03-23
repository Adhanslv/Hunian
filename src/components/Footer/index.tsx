import Image from "next/image";
import React from "react";
import {
	IconMail,
	IconBrandWhatsapp,
	IconBrandInstagram,
	IconBrandGithub,
	IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="px-[10vw] bg-[#00426f] mt-12  grid grid-cols-10  items-center text-white ">
			<div className="col-span-4 mt-12 mb-12 tablet:col-span-6 mobile:col-span-10  ">
				<Image
					src={"door-open-solid.svg"}
					alt="ini logo"
					width={60}
					height={60}
				/>
				<p className="mt-3">
					Dapatkan info kost murah hanya di Hunian App. Mau Sewaan Murah?
				</p>
				<Link href={"/"} className="flex gap-x-3 mt-3">
					{" "}
					<Image
						src={"/playstore.svg"}
						alt="ini gambarnya"
						width={100}
						height={100}
						className="object-cover w-fit"
					/>
					<Image
						src={"/appstore.svg"}
						alt="ini gambarnya"
						width={100}
						height={100}
						className="object-cover w-fit"
					/>
				</Link>
			</div>
			<div className="col-span-6 mt-12 mb-12 flex justify-between tablet:block  mobile:block">
				<div className="flex flex-col gap-y-4 mb-4  text-white/75">
					<h1 className="font-semibold uppercase text-[18px] text-white ">
						Hunian
					</h1>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Tentang Kami
					</Link>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Job Kami
					</Link>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Promosikan Kost Anda
					</Link>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Pusat Bantuan
					</Link>
				</div>
				<div className="flex flex-col gap-y-4 mb-4 text-white/75 ">
					<h1 className="font-semibold uppercase text-[18px] text-white ">
						Kebijakan
					</h1>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Kebijakan Privasi
					</Link>
					<Link
						href={"/"}
						className="hover:translate-x-2 transition ease-in-out duration-300"
					>
						Syarat dan Ketentuan
					</Link>
				</div>
				<div className="flex flex-col gap-y-4 mb-4 text-white/75 mobile:text-[12px]">
					<h1 className="font-semibold uppercase text-[18px] text-white ">
						Hubungi Kami
					</h1>
					<Link href={"/"} className="flex items-center gap-x-3 ">
						<IconMail className="" />
						asyhab2002@gmail.com
					</Link>
					<a
						target="_blank"
						href="https://wa.me/6281345220865"
						className="flex items-center gap-x-2 "
					>
						<IconBrandWhatsapp className="" />
						+6281345220865
					</a>
					<div className="flex items-center gap-x-4">
						<IconBrandInstagram />
						<IconBrandGithub />
						<IconBrandX />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
