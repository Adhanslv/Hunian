import React from "react";
import Image from "next/image";
import { DataTestimoni } from "@/utils/DataTestimoni";

export default function TestimoniCard() {
	return (
		<div className=" p-[10vw] ">
			<div className="text-center text-3xl font-semibold mb-12">
				Our Testimonial
			</div>
			<div className="grid grid-cols-4 gap-x-4 gap-y-4 tablet:grid-cols-2 mobile:grid-cols-1 mobile:justify-center">
				{DataTestimoni.map((data, index) => {
					return (
						<div
							className="bg-slate-100 rounded-md border border-black/20 px-5 py-3 shadow-sm"
							key={index}
						>
							<div className="">
								<div className="flex items-center  gap-x-5 mb-5">
									<Image
										src={data.images}
										alt="ini avatarnya"
										width={60}
										height={60}
										className="rounded-full object-cover object-center aspect-[1/1] w-fit"
									/>
									<div>
										<h1>{data.name}</h1>
										<p className="font-light">Penyewa</p>
									</div>
								</div>
								<p className=" mobile:text-sm mobile:line-clamp-4">
									{data.desk}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
