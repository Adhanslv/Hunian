"use client";
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
					<IconCaretLeft size={40} className="font-light" />
					<h1 className="hover:translate-x-2 transition ease-in duration-300  cursor-pointer">
						Back
					</h1>
				</Link>
			</div>
			<div className="px-[10vw] flex flex-col items-center">
				<div className=" justify-center mt-8">
					<Image
						src={items.images}
						width={100}
						height={100}
						layout="responsive"
						quality={100}
						alt={items.title}
						className="w-[1230px] aspect-[2/1] object-cover object-center mb-4 rounded-t-md mobile:wfu  "
					/>
				</div>
			</div>
			<div className="grid grid-cols-9 mb-7">
				<div className="px-[10vw] mt-12 col-span-6 mobile:col-span-12">
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
					<div className="flex items-center justify-between mt-7 flex-wrap gap-y-4">
						<p className="flex items-center gap-3 text-lg ">
							<IconDoorEnter size={30} />
							{items.stock}
						</p>
						<div className="flex gap-4 ">
							<button className="px-4 py-2 border border-black/40 rounded-md flex items-center gap-x-2">
								<IconHeart />
								Simpan
							</button>
							<button className="px-4 py-2 border border-black/40 rounded-md flex items-center gap-x-2">
								<IconShare />
								Bagikan
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-3 max-w-sm mt-12 mobile:col-span-10 mobile:ml-1 mobile:px-3	">
					<CardPayment />
				</div>
			</div>
		</>
	);
};

export default Previews;
