import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../shared/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-[rgba(247, 248, 249, 1)] text-[#8c8c8c] pl-[15%] pr-[15%] bg-[#F7F8F9]">
			<div className="container mx-auto flex items-center justify-between py-4">
				<div className="text-2xl font-bold">
					<a href="/">
						<img src={Logo} />
					</a>
				</div>

				<div className="lg:hidden">
					<button onClick={toggleMenu} className="focus:outline-none">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							{isOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				<div
					className={`${
						isOpen ? "block" : "hidden"
					} lg:flex flex-grow justify-center space-x-8`}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Почетна
					</NavLink>
					<NavLink
						to="/biografija"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Биографија
					</NavLink>
					<NavLink
						to="/nastava"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Настава
					</NavLink>
					<NavLink
						to="/obavestenja"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Обавештења
					</NavLink>
					<NavLink
						to="/radovi"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Радови
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) =>
							isActive
								? "text-[#1e1818] hover:text-[#8c8c8c] font-semibold text-base"
								: "text-[#8c8c8c] hover:text-[#666666]"
						}>
						Блог
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
