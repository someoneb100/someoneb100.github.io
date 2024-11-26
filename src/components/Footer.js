// src/components/Footer.js
import React from "react";
import { Title } from "./Title";
import data from "../data/websiteData.json";

function Footer() {
	return (
		<footer className="bg-white text-white text-left px-[15%] py-12">
			<Title content={"Контакт информације"} />
			{data.kontakt.map((kontakt) => {
				return (
					<div className="mb-6">
						<p className="text-base text-[#1E1818] mb-2">{kontakt.key}</p>
						<p className="text-base text-[#1E1818] font-semibold">
							{kontakt.value}
						</p>
					</div>
				);
			})}
		</footer>
	);
}

export default Footer;
