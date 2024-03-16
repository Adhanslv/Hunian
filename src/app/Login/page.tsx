import { IconEye } from "@tabler/icons-react";
import React, { useState } from "react";

const LoginPage = () => {
	// const [open, setOpne] = useState(false);
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-3xl font-semibold">Log in</h1>
			<div className="border border-black/20 px-12 py-6  rounded-md mt-3 shadow-lg">
				<div className="flex-col flex">
					<label htmlFor="Username" className="mb-2">
						Username
					</label>
					<input
						type="text"
						name=""
						id=""
						placeholder="@username"
						className="px-3 py-1 border border-black/30 rounded-md"
					/>
					<label htmlFor="Password" className="mb-2 mt-4">
						Password
					</label>
					<div className="flex justify-between items-center">
						<input
							type="password"
							name=""
							id=""
							placeholder="password"
							className="px-3 py-1 border border-black/30 rounded-md"
						/>
						<button className="absolute ml-48 text-black/50">
							<IconEye />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
