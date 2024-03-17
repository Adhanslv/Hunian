import { IconMail, IconLock } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-3xl font-semibold">Log in</h1>
			<div className="border border-black/20 px-12 py-6 rounded-lg mt-3 shadow-lg mobile:w-[90vw] mobile:p-6 ">
				<div className="text-center mb-7 text-[17px]">Welcome Back</div>
				<div className="flex flex-col gap-y-5">
					<div className="relative  p-3 flex items-center gap-3 rounded-lg border border-black/30">
						<IconMail stroke={1.5} />
						<input
							type="text"
							name=""
							id=""
							placeholder="Username or email"
							className="bg-transparent outline-none w-[250px] mobile:w-full"
						/>
					</div>
					<div className="relative  p-3 flex items-center gap-3 rounded-lg border border-black/30">
						<IconLock stroke={1.5} />
						<input
							type="password"
							name=""
							id=""
							placeholder="Password"
							className="bg-transparent outline-none w-[250px] mobile:w-full"
						/>
					</div>
					<button className="rounded-lg  bg-sky-400 font-semibold py-2 text-white border-none">
						Login
					</button>
					<div className="flex items-center justify-between">
						<div className="flex gap-x-1">
							<input
								type="checkbox"
								name="radio"
								id="radio"
								className="w-4 border border-red-300  bg-red-800 focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-red-600 dark:focus:ring-red-600 dark:ring-offset-red-800"
							/>
							<label htmlFor="radio" className="cursor-pointer">
								Remeber me
							</label>
						</div>
						<Link href={"/"}>
							<span className="text-sky-700  cursor-pointer  ">Sign up</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
