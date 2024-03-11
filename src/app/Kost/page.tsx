import CardContent from "@/components/Card/CardContentKost";
import CardSortKost from "@/components/Card/CardSortKost";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function KostanPage() {
	return (
		<div>
			<Navbar />
			<CardSortKost />
			<CardContent />
			<Footer />
		</div>
	);
}
