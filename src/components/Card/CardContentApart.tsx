"use client";
import Image from "next/image";
import React from "react";
import { DataContentApartemen } from "@/utils/DataContent";
import Link from "next/link";
export default function CardContent() {
	return (
		<div className=" mt-12 px-[10vw]">
			<div className="grid grid-cols-3 gap-x-12  tablet:grid-cols-2 mobile:block">
				{DataContentApartemen.map((data, index) => {
					return (
						<div
							key={index}
							className=" hover:scale-105  ease-in duration-300 overflow-hidden"
						>
							<Link href="/Preview/Apartemen" as={`/Preview/${data.partid}`}>
								<div className="-mb-4 overflow-hidden block">
									<Image
										src={data.images}
										width={200}
										height={100}
										layout="responsive"
										quality={100}
										loading="lazy"
										alt="ini fotonya"
										className="w-full aspect-[21/9] object-cover object-center mb-4 rounded-t-xl cursor-pointer "
									/>
								</div>
								<div className="mb-8 border border-black/20  bg-white items-center  px-5 py-4 rounded-b-xl shadow-sm ">
									<div className="flex items-center justify-between mb-3">
										<h1 className="font-semibolds">{data.type}</h1>
										<p className="italic text-black/75">{data.stock}</p>
									</div>
									<h1 className=" uppercase font-semibold">{data.title}</h1>
									<p>{data.desk}</p>
									<p className="mb-3 mt-2 text-black/45 ">{data.domsil}</p>
									<div className="card-body flex items-center  justify-between mb-4 text-black/75 font-light">
										<span>{data.author}</span>
										<span>{data.timestamp}</span>
									</div>
									<div className="flex gap-x-3 tablet:text-sm mobile:text-sm"></div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
