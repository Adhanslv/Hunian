"use client";
import Image from "next/image";
import React from "react";
import { DataContentKost } from "@/utils/DataContent";
import Link from "next/link";
import { notFound } from "next/navigation";
export default function CardContent() {
	return (
		<div className=" mt-12 px-[10vw]">
			<div className="grid grid-cols-3 gap-x-12 tablet:grid-cols-2 mobile:block">
				{DataContentKost.map((data, index) => {
					return (
						<div key={index}>
							<div className="-mb-4 overflow-hidden block">
								<Image
									src={data.images}
									width={200}
									height={100}
									alt="ini fotonya"
									className="w-full aspect-[2/1] object-cover object-center mb-4 rounded-t-md cursor-pointer hover:scale-110  ease-in duration-300 overflow-hidden "
								/>
							</div>
							<div className="mb-8 border border-black/20  bg-white items-center  px-5 py-4 rounded-b-md shadow-md ">
								<div className="flex items-center justify-between mb-3">
									<h1 className="font-semibolds">{data.type}</h1>
									<p className="italic text-black/75">{data.stock}</p>
								</div>
								<Link href="/Preview/[id]" as={`/Preview/${data.id}`}>
									<h1 className=" uppercase font-semibold">{data.title}</h1>
								</Link>
								<p>{data.desk}</p>
								<p className="mb-3 mt-2 text-black/45 ">{data.domsil}</p>
								<div className="card-body flex items-center  justify-between mb-4 text-black/75 font-light">
									<span>{data.author}</span>
									<span>{data.timestamp}</span>
								</div>
								<div className="flex gap-x-3 tablet:text-sm mobile:text-sm">
									<button className="bg-[#3d7d7b] text-white px-5 py-2  w-full	 rounded-md">
										Lihat Detail
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
