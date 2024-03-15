import CardContentHome from "@/components/Card/CardContenHome";
import TestimoniCard from "@/components/Card/TestimoniCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentMethod from "@/components/PaymentMethod";
import React from "react";

export default function Pages() {
	return (
		<div>
			<Navbar />
			<CardContentHome />
			<TestimoniCard />
			<PaymentMethod />
			<Footer />
		</div>
	);
}
