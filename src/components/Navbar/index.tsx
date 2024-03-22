"use client";
import React, { useState } from "react";
import CardSearch from "../Card/CardSearch";
import { IconBrandGoogleFilled, IconDoor } from "@tabler/icons-react";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const navLink = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Kost",
			path: "/Kost",
		},
		{
			name: "Apartemen",
			path: "/Apartemen",
		},
	];

	const pathname = usePathname();
	const isActive = (path: any) => path === pathname;
	return (
		<>
			<nav className="flex items-center justify-between p-[10vw] py-5  bg-[#00426f] tablet:px-[5vw] mobile:px-4	">
				<div className="text-white flex items-center gap-x-2 text-3xl font-semibold mobile:text-[19px]">
					<IconDoor size={35} /> Hunian
				</div>
				<div className="flex gap-2	 text-white text-[17px] mobile:hidden ">
					{navLink.map((link) => {
						return (
							<Link
								href={link.path}
								key={link.path}
								className={
									isActive(link.path)
										? "bg-[#0879c7]/15 text-white py-1 px-2	rounded-full "
										: "text-white/50 hover:text-white py-1 px-2"
								}
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div>
					<Link href={"/Login"}>
						<button className=" flex  items-center gap-x-2 px-5 py-2 rounded-md bg-white outline-none text-[#00426f] mobile:hidden">
							<IconBrandGoogleFilled /> Log in
						</button>
					</Link>
					<button
						onClick={() => setOpen((open) => !open)}
						className="hidden mobile:block text-white"
					>
						<IconMenu2 />
					</button>
				</div>
			</nav>
			<div className="hidden items-center md:hidden lg:hidden tablet:hidden mobile:block   ">
				<div
					className={`fixed bottom-0 right-0  w-full  mt-12   overflow-hiddenn   border-2 border-black/20 text-black rounded-t-3xl p-4	 mobile:bg-white  z-50 `}
				>
					<div className="flex items-center justify-center mb-1 gap-1 ">
						{navLink.map((link) => {
							return (
								<div className="flex gap-x-1 items-center">
									<Link
										href={link.path}
										key={link.path}
										className={
											isActive(link.path)
												? "bg-[#0879c7] text-white py-1 px-2	rounded-full w-fit    "
												: "text-black py-1 px-2 hover:bg-[#0879c7]/20 rounded-full w-fit "
										}
									>
										{link.name}
									</Link>
								</div>
							);
						})}
						<Link
							href={"/Login"}
							className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
						>
							Log in
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center bg-[#00426f]">
				<CardSearch />
			</div>
		</>
	);
};

export default Navbar;
