import { RefPayment } from "@/utils/PaymentImageData";
import Image from "next/image";
import React from "react";

export default function PaymentMethod() {
	return (
		<div className="px-[10vw] flex flex-col items-center ">
			<div className="font-semibold text-3xl">Payment Method</div>
			<div className="flex items-center justify-center flex-wrap  gap-6 mt-10 mb-20">
				{RefPayment.map((ref, index) => {
					return (
						<Image
							src={ref.images}
							alt={ref.images}
							width={100}
							height={100}
							className="w-fit h-fit mobile:w-24 "
							loading="lazy"
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
