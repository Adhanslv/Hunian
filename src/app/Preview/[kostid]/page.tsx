"use client";
import ButtonKeep from "@/components/ButtonKeep";
import CardBenefits from "@/components/CardBenefits";
import CardPayment from "@/components/CardPay";
import CardReviews from "@/components/CardReviews";
import { DataContentKost } from "@/utils/DataContent";
import { IconPlayerPlay, IconRotate360 } from "@tabler/icons-react";
import {
	IconCash,
	IconCircleArrowLeft,
	IconDoorEnter,
	IconHeart,
	IconPhoto,
	IconShare,
	IconUserHeart,
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
				<Link href={"/"} className="flex items-center  gap-x-2">
					<IconCircleArrowLeft size={35} className="font-light mobile:-ml-4" />
					<h1 className="hover:translate-x-2 font-semibold transition ease-in duration-300  cursor-pointer text-[20px] mobile:text-[19px]">
						Back
					</h1>
				</Link>
			</div>
			<div className="px-[10vw] flex flex-col items-center mobile:px-4">
				<div className=" justify-center mt-8">
					<Image
						src={items.images}
						width={10}
						height={10}
						layout="responsive"
						quality={100}
						alt={items.title}
						className=" aspect-[5.50/2] object-cover object-center mb-4 rounded-md  mobile:aspect-video mobile:rounded-md	 "
					/>
				</div>
			</div>
			<div className="px-[10vw]  flex items-center gap-x-4 mobile:justify-center	 tablet:flex-wrap">
				<CardReviews>
					<IconPhoto /> Foto
				</CardReviews>
				<CardReviews>
					<IconPlayerPlay /> Video
				</CardReviews>
				<CardReviews>
					<IconRotate360 /> 360°
				</CardReviews>
			</div>
			<div className="grid grid-cols-9 mb-7 items-start">
				<div className="px-[10vw] mt-12 col-span-6 tablet:col-span-5  mobile:col-span-12 ">
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
				<div className="col-span-3 max-w-sm mt-12 mobile:col-span-10 mobile:ml-1  mobile:px-2	">
					<CardPayment />
				</div>
				<div className="col-span-6  px-[10vw] mt-12 mb-12 leading-10 flex items-center  justify-between tablet:col-span-5 mobile:col-span-12">
					<div>
						<h1 className="text-2xl mobile:text-[19px]">
							Kos Dikelola Oleh
							<span className="font-semibold"> {items.author}</span>
						</h1>
						<p className="text-black/50 text-[18px]  ">Online 4 hari lalu</p>
					</div>
					<div>
						<Image
							src={"/nerds.jpeg"}
							alt={items.title}
							width={78}
							height={78}
							className="object-cover rounded-full h-fit object-jcenter"
						/>
					</div>
				</div>
				<div className="-ml-4 col-start-2 col-span-6 max-w-[940px]  border-b-2 border-b-black/20 border-dashed  mb-7 mobile:col-start-2 mobile:col-span-8 mobile:w-[334px] "></div>
				<div className="px-[10vw] col-span-12">
					<h1 className="font-semibold text-2xl">
						Yang kamu dapatkan di {items.title}
					</h1>
					<CardBenefits />
				</div>
				<div className="-ml-4 col-start-2 col-span-6 max-w-[940px]  border-b-2 border-b-black/20 border-dashed  mb-7 mobile:col-start-2 mobile:col-span-8 mobile:w-[334px] "></div>
			</div>
		</>
	);
};

export default Previews;
