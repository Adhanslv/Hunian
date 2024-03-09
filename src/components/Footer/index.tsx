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
			<div className="col-span-4 mt-12 mb-12 mobile:col-span-12  ">
				<Image
					src={"door-open-solid.svg"}
					alt="ini logo"
					width={60}
					height={60}
				/>
				<p className="mt-5">
					Dapatkan "info kost murah" hanya di Hunian App. Mau "Sewaan Murah"?
				</p>
				<div className="flex gap-x-3  mt-4">
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
				</div>
			</div>
			<div className="col-span-6 mt-12 mb-12 flex justify-between mobile:block">
				<div className="flex flex-col gap-y-4 mb-4">
					<h1 className="font-semibold uppercase text-[18px] ">Hunian</h1>
					<p>Tentang Kami</p>
					<p>Job Kami</p>
					<p>Promosikan Kost Anda</p>
					<p>Pusat Bantuan</p>
				</div>
				<div className="flex flex-col gap-y-4 mb-4">
					<h1 className="font-semibold uppercase text-[18px] ">Kebijakan</h1>
					<p>Kebijakan Privasi</p>
					<p>Syarat dan Ketentuan</p>
				</div>
				<div className="flex flex-col gap-y-4 mb-4">
					<h1 className="font-semibold uppercase text-[18px] ">Hubungi Kami</h1>
					<Link href={"/"} className="flex items-center gap-x-3 ">
						<IconMail className="text-teal-500" />
						asyhab2002
					</Link>
					<Link href={"/"} className="flex items-center gap-x-3 ">
						<IconBrandWhatsapp className="text-green-400" />
						+6281345220865
					</Link>
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
