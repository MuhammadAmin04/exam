
import "./style.scss";
import Logo from "../../assets/icons/Logo.svg"
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import { NavLink } from "react-router-dom";


const index = () => {
    return (
			<header className="w-full fixed top-0 z-50 bg-white">
				<div className="container">
					<div className="wrapper flex  justify-between mt-[16px] ">
						<img src={Logo} alt="logo" className="" />
						<div className="flex gap-x-5  ">
							<img src={search} alt="search"  className=" cursor-pointer"/>
							<img src={cart} alt="cart" className=" cursor-pointer" />
						</div>
					</div>
				</div>
				<nav className="container " aria-label="Global">
					<div className="flex justify-center items-center gap-x-[67px] h-[131px]">
						<NavLink
							to="/"
							className="text-sm font-semibold py-3 px-5 leading-6 text-gray-900"
						>
							Home
						</NavLink>
						<NavLink
							to="/flowers"
							className="text-sm font-semibold py-3 px-5  leading-6 text-gray-900"
						>
							Flowers
						</NavLink>
						<NavLink
							to="/plants"
							className="text-sm font-semibold py-3 px-5  leading-6 text-gray-900"
						>
							Plants
						</NavLink>
						<NavLink
							to="/gifts"
							className="text-sm font-semibold py-3 px-5 leading-6 text-gray-900"
						>
							Gifts
						</NavLink>
						<NavLink
							to="/discount"
							className="text-sm font-semibold py-3 px-5 leading-6 text-gray-900"
						>
							 Discounts
						</NavLink>
					</div>
				</nav>
			</header>
		);
};

export default index;