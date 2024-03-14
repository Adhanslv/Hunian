"use client";
import React from "react";
const CardReviews = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col items-center w-14 px-12 py-3 gap-y-2  border border-black/30 rounded-md mt-4 cursor-pointer mobile:w-10 tablet:w-10">
			{children}
		</div>
	);
};

export default CardReviews;
