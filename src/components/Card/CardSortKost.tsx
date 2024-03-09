import { DataKost } from "@/utils/DatasetCard";
import React from "react";

export default function CardSortKost() {
	return (
		<div className="flex justify-center items-center gap-x-5 mt-12 cursor-pointer tablet:flex-wrap tablet:gap-y-3 mobile:flex-wrap mobile:gap-y-3 ">
			{DataKost.map((data, index) => {
				return (
					<div
						className="px-5 py-2 text-white rounded-md bg-[#00426f] hover:bg-[#00426f]/75"
						key={index}
					>
						<h1>{data.title}</h1>
					</div>
				);
			})}
		</div>
	);
}
