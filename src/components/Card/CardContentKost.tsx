import Image from "next/image";
import React from "react";

import { DataContentKost } from "@/utils/DataContent";
export default function CardContent() {
	// const Dataset = [
	// 	{
	// 		images: Room1,
	// 		stock: "Sisa 10 Kamar",
	// 		type: "Putra",
	// 		title: "Kost Berandal",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Mami Kos",
	// 		timestamp: "12/02/2023",
	// 	},
	// 	{
	// 		images: Room2,
	// 		stock: "Sisa 2 Kamar",
	// 		type: "Putri",
	// 		title: "Kost Rawa Indah",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Kimbe",
	// 		timestamp: "12/02/2023",
	// 	},
	// 	{
	// 		images: Room3,
	// 		stock: "Sisa 5 Kamar",
	// 		type: "Putra",
	// 		title: "Kost Laravel",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Parsinta",
	// 		timestamp: "12/02/2023",
	// 	},
	// 	{
	// 		images: Room1,
	// 		stock: "Sisa 2 Kamar",
	// 		type: "Putra",
	// 		title: "Kost Swifter",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Afrizal",
	// 		timestamp: "12/02/2023",
	// 	},
	// 	{
	// 		images: Room2,
	// 		stock: "Sisa 1 Kamar",
	// 		type: "Putra",
	// 		title: "Kost Galgadot",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Kang Oban",
	// 		timestamp: "12/02/2023",
	// 	},
	// 	{
	// 		images: Room3,
	// 		stock: "Sisa 5 Kamar",
	// 		type: "Putri",
	// 		title: "Kost Dewsiui",
	// 		desk: "Jl. Ir Soeakrno Gg.Dharma Bakti Kec. Muara Jawa Ulu Kel. Muara",
	// 		domsil: "Jawa Timur, Sidoarjo",
	// 		author: "Adhan",
	// 		timestamp: "12/02/2023",
	// 	},
	// ];
	return (
		<div className=" mt-12 px-[10vw]">
			<div className="grid grid-cols-3 gap-x-12 tablet:grid-cols-2 mobile:block">
				{DataContentKost.map((data, index) => {
					return (
						<div
							className="mb-8 border border-black/20  bg-white items-center  px-5 py-4 rounded-md shadow-sm"
							key={index}
						>
							<Image
								src={data.images}
								width={200}
								height={100}
								alt="ini fotonya"
								className="w-full aspect-video object-cover object-center mb-4 rounded-md "
							/>
							<div className="flex items-center justify-between mb-3">
								<h1 className="font-semibold">{data.type}</h1>
								<p className="italic text-black/75">{data.stock}</p>
							</div>
							<h1 className=" uppercase font-semibold">{data.title}</h1>
							<p>{data.desk}</p>
							<p className="mb-3 mt-2 text-black/45 ">{data.domsil}</p>
							<div className="card-body flex items-center  justify-between mb-4 text-black/75 font-light">
								<span>{data.author}</span>
								<span>{data.timestamp}</span>
							</div>
							<div className="flex gap-x-3 tablet:text-sm mobile:text-sm">
								<button className="bg-[#3d7d7b] text-white px-5 py-2 w-full rounded-md">
									Lihat Detail
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
