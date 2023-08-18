import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const index = ({ state: { image, title, price, discount , id} }) => {
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	const handleCardHover = () => {
		setIsButtonVisible(true);
	};

	const handleCardLeave = () => {
		setIsButtonVisible(false);
	};

	return (
		<div
			onMouseEnter={handleCardHover}
			onMouseLeave={handleCardLeave}
			className="card h-[366px] min-w-[260px] border hover:shadow-lg relative "
		>
			<img src={image} alt="" className="w-[260px] h-[260px] " />
			<Link to={`/flowers/${id}`}>
				<h2 className="text-[18px] font-medium pl-[10px] pt-[20px]">{title}</h2>
			</Link>
			<div className="flex pl-[10px] gap-x-4">
				<p className=" text-[14px] font-medium  pt-[8.5px]">{price}</p>
				{discount && (
					<p className="text-[14px] font-medium  pt-[8.5px] text-[#82828B] line-through">
						{discount}
					</p>
				)}
			</div>
			{isButtonVisible && (
				<button className="hidden-button absolute top-[235px] left-[210px] w-[46px] h-[46px] rounded-[50%]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.1867 6.28345C14.8087 6.66137 14.8087 7.27411 15.1867 7.65204L18.6959 11.1613H2.96774C2.43327 11.1613 2 11.5946 2 12.129C2 12.6635 2.43327 13.0968 2.96774 13.0968H18.6959L15.1867 16.606C14.8087 16.984 14.8087 17.5967 15.1867 17.9746C15.5646 18.3525 16.1773 18.3525 16.5553 17.9746L21.7162 12.8137M21.9266 11.7586C21.8793 11.6445 21.8093 11.5375 21.7166 11.4447L16.5553 6.28345C16.1773 5.90552 15.5646 5.90552 15.1867 6.28345M21.9266 11.7586C21.9735 11.8719 21.9996 11.996 22 12.1261C22 12.1271 22 12.1281 22 12.129C22 12.13 22 12.131 22 12.1319C21.9993 12.3777 21.9055 12.6233 21.7186 12.8113"
							fill="white"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default index;
