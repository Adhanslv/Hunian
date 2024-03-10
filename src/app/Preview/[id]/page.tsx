"use client";
import { DataContentKost } from "@/utils/DataContent";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const Previews = () => {
	const { id } = useParams();
	const items = DataContentKost.filter((items) => items.id == id)[0];

	const searchParams = useSearchParams();
	return (
		<div className="px-[10vw]">
			<div>
				<Image
					src={items.images}
					width={200}
					height={100}
					alt={items.title}
					className="w-[1230px] aspect-[2/1] object-cover object-center mb-4 rounded-t-md  "
				/>
			</div>
			<div className="flex">
				<h1>{items.title}</h1>
			</div>
		</div>
	);
};

export default Previews;
