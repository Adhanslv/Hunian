import React from "react";
import { IconSearch } from "@tabler/icons-react";

function CardSearch() {
	return (
		<div className="p-12 bg-white rounded-md  mt-24 mb-14  tablet:w-[770px]">
			<div className="flex items-center gap-x-4 tablet: tablet:gap-y-3 mobile:flex-col mobile:gap-y-3">
				<label htmlFor="provinsi" className="text-sky-950">
					Provinsi:
				</label>
				<select
					name="Provinsi"
					id="provinsi"
					className="px-2.5 py-2 rounded-md border border-black/30 tablet:w-full mobile:w-full"
				>
					<option value="">Provinsi</option>
					<option value="">Jawa Timur</option>
					<option value="">Jawa Tengah</option>
					<option value="">Jawa Barat</option>
					<option value="">Kalimantan Timur</option>
					<option value="">Kalimantan Selatan</option>
				</select>
				<label htmlFor="Kabupaten">Kota/Kabupaten:</label>
				<select
					name="Kabupaten"
					id="Kabupaten"
					className="px-2.5 py-2 rounded-md border border-black/30 tablet:w-full mobile:w-full"
				>
					<option value="">Kota/Kabupaten </option>
					<option value="">Malang</option>
					<option value="">Sidoarjo</option>
					<option value="">Solo</option>
					<option value="">Samarinda</option>
					<option value="">Banjarbaru</option>
				</select>
				<button
					type="submit"
					className="flex items-center gap-2 px-3 py-2 bg-[#00426f] text-white rounded-md tablet:w-full tablet:text-[14px] tablet:px-2 mobile:w-full "
				>
					<IconSearch />
					Cari Hunian
				</button>
			</div>
		</div>
	);
}

export default CardSearch;
