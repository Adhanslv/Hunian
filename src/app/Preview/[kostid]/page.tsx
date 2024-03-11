"use client";
import ButtonKeep from "@/components/ButtonKeep";
import CardPayment from "@/components/CardPay";
import { DataContentKost } from "@/utils/DataContent";
import {
	IconBolt,
	IconCaretLeft,
	IconCash,
	IconDoorEnter,
	IconHeart,
	IconShare,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Previews = () => {
	const { kostid } = useParams();
	const items = DataContentKost.filter((items) => items.kostid == kostid)[0];

	return (
		<>
			<div className="px-[10vw]  flex items-center text-2xl mobile:-ml-3 mt-10">
				<Link href={"/"} className="flex items-center">
					<IconCaretLeft size={35} className="font-light" />
					<h1 className="hover:translate-x-2 transition ease-in duration-300  cursor-pointer text-[20px] mobile:text-[18px]">
						Back
					</h1>
				</Link>
			</div>
			<div className="px-[10vw] flex flex-col items-center mobile:p-0">
				<div className=" justify-center mt-8">
					<Image
						src={items.images}
						width={10}
						height={10}
						layout="responsive"
						quality={100}
						alt={items.title}
						className=" aspect-[5.50/2] object-cover object-center mb-4 rounded-md  mobile:aspect-video mobile:rounded-none	 "
					/>
				</div>
			</div>
			<div className="grid grid-cols-10 mb-7">
				<div className="px-[10vw] mt-12 col-span-7 mobile:col-span-12">
					<h1 className="text-3xl font-semibold mb-2">{items.title}</h1>
					<div className="flex items-center  mt-6 gap-3 flex-wrap">
						<p className="text-[18px] px-3 py-2 border border-black/30 rounded-md">
							{items.type}
						</p>
						<p className="text-[18px]"> {items.domsil}</p>
						<p className="text-[18px]"> {items.desk}</p>
						<p className="flex items-center gap-2">
							<IconCash size={30} className="text-green-700" /> 24 transaksi
							berhasil di kos ini
						</p>
					</div>
					<div className=" flex items-center justify-between mt-7 flex-wrap gap-y-4">
						<p className="flex items-center gap-3 text-lg ">
							<IconDoorEnter size={30} />
							{items.stock}
						</p>
						<div className="flex gap-4 ">
							<ButtonKeep>
								<IconHeart />
								Simpan
							</ButtonKeep>
							<ButtonKeep>
								<IconShare />
								Bagikan
							</ButtonKeep>
						</div>
					</div>
				</div>
				<div className="col-span-2 max-w-sm mt-12 mobile:col-span-10 mobile:ml-1 mobile:px-3	">
					<CardPayment />
				</div>
				<div className="col-span-7 px-[10vw] mt-12 mb-12 leading-10 flex items-center  justify-between mobile:col-span-12">
					<div>
						<h1 className="text-2xl mobile:text-[19px]">
							Kos Dikelola Oleh{" "}
							<span className="font-semibold">{items.author}</span>
						</h1>
						<p className="text-black/50 text-[18px]  ">Online 4 hari lalu</p>
					</div>
					<div>
						<Image
							src={"/nerds.jpeg"}
							alt={items.title}
							width={78}
							height={78}
							className="object-cover rounded-full h-fit object-center"
						/>
					</div>
				</div>
				<div className=" col-start-2 col-span-6 w-full  border-b-2 border-b-black/20 border-dashed  mb-7 mobile:col-start-2 mobile:col-span-8 "></div>
				<div className="px-[10vw] col-span-12">
					<h1>Yang kamu dapatkan di {items.title}</h1>
				</div>
			</div>
		</>
	);
};

export default Previews;
