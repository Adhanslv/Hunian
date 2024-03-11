"use client";
import { DataContentApartemen } from "@/utils/DataContent";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Previews = () => {
	const { partid } = useParams();
	const items = DataContentApartemen.filter(
		(items) => items.partid == partid
	)[0];

	return (
		<div className="px-[10vw] flex flex-col items-center">
			<div className=" justify-center mt-12">
				<Image
					src={items.images}
					width={100}
					height={100}
					layout="responsive"
					quality={100}
					alt={items.title}
					className="w-[1230px] aspect-[2/1] object-cover object-center mb-4 rounded-t-md  "
				/>
			</div>
			<div className="">
				<h1>{items.title}</h1>
			</div>
		</div>
	);
};

export default Previews;
