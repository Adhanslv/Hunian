import CardContent from "@/components/Card/CardContentKost";
import TestimoniCard from "@/components/Card/TestimoniCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentMethod from "@/components/PaymentMethod";
import React from "react";

export default function Pages() {
	return (
		<div>
			<Navbar />
			<CardContent />
			<TestimoniCard />
			<PaymentMethod />
			<Footer />
		</div>
	);
}
