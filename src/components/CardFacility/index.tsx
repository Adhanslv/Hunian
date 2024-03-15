import { IconWindow } from "@tabler/icons-react";
import { IconHanger } from "@tabler/icons-react";
import { IconArmchair2, IconBed, IconWind } from "@tabler/icons-react";
import React from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaShower } from "react-icons/fa";
import { GiMirrorMirror, GiPillow } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";

const CardFacility = () => {
	return (
		<div>
			<h1 className="text-2xl font-semibold">Fasilitas</h1>
			<div className="grid grid-cols-2 mb-20 mt-10">
				<div className="flex flex-col gap-y-5  ">
					<p className="flex items-center gap-x-2">
						<IconWind />
						AC
					</p>
					<p className="flex items-center gap-x-2">
						<IconArmchair2 /> Kursi
					</p>
					<p className="flex items-center gap-x-2">
						<CgSmartHomeRefrigerator size={24} />
						Kulkas
					</p>
					<p className="flex items-center gap-x-2">
						<GiPillow size={24} />
						Bantal
					</p>
					<p className="flex items-center gap-x-2">
						<MdOutlineCleaningServices size={24} />
						Cleaning service
					</p>
				</div>
				<div className="flex flex-col gap-y-5 ">
					<p className="flex items-center gap-x-2">
						<IconBed />
						Kasur
					</p>
					<p className="flex items-center gap-x-2">
						<IconHanger /> Lemari Baju
					</p>
					<p className="flex items-center gap-x-2">
						<IconWindow /> Ventilasi
					</p>
					<p className="flex items-center gap-x-2">
						<GiMirrorMirror size={24} />
						Cermin
					</p>
					<p className="flex items-center gap-x-2">
						<FaShower size={24} />
						Shower
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardFacility;
