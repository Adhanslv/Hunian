import CardContentApart from "@/components/Card/CardContentApart";
import CardSortApartemen from "@/components/Card/CardsSortApart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ApartemenPage() {
	return (
		<div>
			<Navbar />
			<CardSortApartemen />
			<CardContentApart />
			<Footer />
		</div>
	);
}
