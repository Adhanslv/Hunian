import React from "react";
import CardSearch from "../Card/CardSearch";
import { IconBrandGoogleFilled, IconDoor } from "@tabler/icons-react";

import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="flex items-center justify-between p-[10vw] py-5  bg-[#00426f] tablet:px-4 mobile:px-3">
				<div className="text-white flex items-center gap-x-2 text-3xl font-semibold mobile:text-[19px]">
					<IconDoor size={35} /> Hunian
				</div>
				<div className="flex gap-10	 text-white text-lg mobile:hidden ">
					<Link href={"/"}>Home</Link>
					<Link href={"/Kost"}>Kost</Link>
					<Link href={"/Apartemen"}>Apartemen</Link>
				</div>
				<div>
					<Link href={"/Login"}>
						<button className=" flex  items-center gap-x-2 px-5 py-2 rounded-md bg-white outline-none text-[#00426f] mobile:px-1">
							<IconBrandGoogleFilled /> Login
						</button>
					</Link>
				</div>
			</nav>
			<div className="flex items-center justify-center bg-[#00426f]">
				<CardSearch />
			</div>
		</>
	);
};

export default Navbar;
