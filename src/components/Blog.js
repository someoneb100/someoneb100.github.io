import React from "react";
import { Title } from "./Title";
import data from "../data/websiteData.json";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
	const blogs = data.blogovi;
	const navigate = useNavigate();

	return (
		<div className="pl-[15%] pr-[15%] bg-[#F7F8F9] pb-12 w-full">
			<Title content={"Блог"} />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
				{blogs.map((blog, index) => (
					<div
						key={index}
						className="w-68 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
						<img
							src={blog.slika}
							alt="Blog preview"
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-lg font-semibold text-red-600 mb-2">
								{blog.naslov}
							</h3>
							<p className="text-sm text-gray-700 mb-3 line-clamp-[4] overflow-hidden text-ellipsi">
								{blog.opis}
							</p>
							<div className="flex">
								<p className="text-sm text-gray-500 mb-3">{blog.datum}</p>
								<a
									onClick={() => navigate(`/blog/${blog.id}`)}
									className=" text-[#22A8C5] text-sm ml-auto text font-medium hover:cursor-pointer hover:text-[#1B86A0]">
									Видети више →
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
