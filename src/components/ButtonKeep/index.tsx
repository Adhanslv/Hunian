"use client";
import React from "react";
const ButtonKeep = (props: any) => {
	const { className = "border border-black/30 py-3", children } = props;
	return (
		<button
			className={`${className}  px-4 py-2 border border-[#00426f] rounded-md flex items-center gap-x-2`}
		>
			{children}
		</button>
	);
};

export default ButtonKeep;
