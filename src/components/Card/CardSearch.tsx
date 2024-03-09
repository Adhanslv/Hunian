import React from "react";
import { IconSearch } from "@tabler/icons-react";

function CardSearch() {
	return (
		<div className="p-12 bg-white rounded-md  mt-24 mb-14  tablet:max-w-96">
			<div className="flex items-center gap-x-4 tablet:flex-col  tablet:gap-y-3 mobile:flex-col">
				<label htmlFor="">Provinsi:</label>
				{/* <input
					type="text"
					placeholder="Provinsi"
					className="border border-black/30 rounded-md px-3	 py-2"
				/> */}
				<select
					name="Provinsi"
					id="provinsi"
					className="px-2.5 py-2 rounded-md border border-black/30"
				>
					<option value="">Provinsi</option>
					<option value="">Jawa Timur</option>
					<option value="">Jawa Tengah</option>
					<option value="">Jawa Barat</option>
				</select>
				<label htmlFor="">Kota/Kabupaten:</label>
				{/* <input
					type="text"
					placeholder="Kota/Kabupaten"
					className="border border-black/30 rounded-md px-3	 py-2"
				/> */}
				<select
					name="Provinsi"
					id="provinsi"
					className="px-2.5 py-2 rounded-md border border-black/30"
				>
					<option value="">Kota/Kabupaten </option>
					<option value="">Malang</option>
					<option value="">Sidoarjo</option>
					<option value="">Solo</option>
				</select>
				<button
					type="submit"
					className="flex items-center gap-2 px-3 py-2 bg-[#00426f] text-white rounded-md tablet:"
				>
					<IconSearch />
					Cari Hunian
				</button>
			</div>
		</div>
	);
}

export default CardSearch;
