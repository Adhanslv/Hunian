import { IconBolt, IconMessage } from "@tabler/icons-react";
import React from "react";

const CardPayment = () => {
	return (
		<div className=" px-4 py-3 shadow-lg border border-black/10 rounded-md">
			<h1 className="flex items-center text-[20px] gap-3">
				<IconBolt className="text-red-600" size={35} />
				Diskon 250rb sewa 3 bulan
			</h1>
			<p className="text-[18px] px-2 mt-2">
				Rp 1.500.000<span className="text-sm">/bulan</span>
			</p>
			<div className="flex mt-5 px-2 gap-x-3">
				<input
					type="date"
					className="px-4 py-3 border border-[#00426f] rounded-md mobile:text-[13px]"
				/>
				<select
					name=""
					id=""
					className="px-4 py-3 border border-[#00426f] rounded-md w-40 "
				>
					<option value="">3 bulan</option>
					<option value="">4 bulan</option>
					<option value="">5 bulan</option>
				</select>
			</div>
			<div className="flex flex-col gap-4 mt-6 mb-5 px-2">
				<div className="px-4 py-2 cursor-pointer border border-[#00426f]  rounded-md flex items-center gap-x-2">
					<IconMessage />
					Tanya Pemilik
				</div>
				<div className="px-4 py-2 cursor-pointer border border-[#00426f]  rounded-md flex items-center gap-x-2">
					Ajukan Sewa
				</div>
			</div>
		</div>
	);
};

export default CardPayment;
