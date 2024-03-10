"use client";
import React, { useState } from "react";
import CardSearch from "../Card/CardSearch";
import { IconBrandGoogleFilled, IconDoor } from "@tabler/icons-react";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<nav className="flex items-center justify-between p-[10vw] py-5  bg-[#00426f] tablet:px-4 mobile:px-3">
				<div className="text-white flex items-center gap-x-2 text-3xl font-semibold mobile:text-[19px]">
					<IconDoor size={35} /> Hunian
				</div>
				<div className="flex gap-10	 text-white text-lg mobile:hidden ">
					<Link href={"/"} className="text-white/75 hover:text-white ">
						Home
					</Link>
					<Link href={"/Kost"} className="text-white/75 hover:text-white ">
						Kost
					</Link>
					<Link href={"/Apartemen"} className="text-white/75 hover:text-white ">
						Apartemen
					</Link>
				</div>
				<div>
					<button className=" flex  items-center gap-x-2 px-5 py-2 rounded-md bg-white outline-none text-[#00426f] mobile:hidden">
						<IconBrandGoogleFilled /> Login
					</button>
					<button
						onClick={() => setOpen((open) => !open)}
						className="hidden mobile:block text-white"
					>
						<IconMenu2 />
					</button>
				</div>
			</nav>
			<div className="flex items-center md:hidden lg:hidden tablet:hidden   ">
				<div
					className={`${
						open ? "block" : "hidden"
					} absolute top-0 right-0 mr-8 w-56  mt-12   overflow-hiddenn  border border-black/20 text-black rounded-lg px-2 py-2.5 mobile:bg-white `}
				>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md "
					>
						Home
					</Link>
					<Link
						href={"/Kost"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						Kost
					</Link>
					<Link
						href={"/Apartemen"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						Apartemen
					</Link>
					<div className=" h-px	 my-1 w-full bg-black/20 " />
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						Log in
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-center bg-[#00426f]">
				<CardSearch />
			</div>
		</>
	);
};

export default Navbar;
