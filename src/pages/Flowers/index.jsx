import React from 'react';
import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";
import leftGrey from "../../assets/icons/leftGrey.svg";
import rightBlack from "../../assets/icons/rightBlack.svg";
import { Carousel } from "antd";
import Cards from "../../components/UI/Cards";
import "./flowers.scss";
import data from "../../server/db";

const contentStyle = {
	height: "482px",
	color: "#fff",
	lineHeight: "482px",
	textAlign: "center",
	background: "#364d79",
};

const index = () => {
	const { newFlowers } = data;
	const { relevant } = data;
	return (
		<div className="container">
			<div className="wrapper mt-[198px]">
				<section className="">
					<Carousel autoplay>
						<div
							id="carousel"
							className="carousel w-full h-[482px] p-[216px] pl-[100px]"
						>
							<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
								40% OFF
							</h2>
							<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
								Best deals this week. Fresh flowers, plants and gifts
							</p>
							<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px] active:bg-[#595CFF]">
								Shop now <img src={right} className="pt-1 " alt="right" />
							</button>
						</div>
						<div
							id="carousel"
							className="carousel w-full h-[482px] p-[216px] pl-[100px]"
						>
							<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
								40% OFF
							</h2>
							<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
								Best deals this week. Fresh flowers, plants and gifts
							</p>
							<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px] active:bg-[#595CFF]">
								Shop now <img src={right} className="pt-1 " alt="right" />
							</button>
						</div>
						<div
							id="carousel"
							className="carousel w-full h-[482px] p-[216px] pl-[100px]"
						>
							<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
								40% OFF
							</h2>
							<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
								Best deals this week. Fresh flowers, plants and gifts
							</p>
							<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px] active:bg-[#595CFF]">
								Shop now <img src={right} className="pt-1 " alt="right" />
							</button>
						</div>
						<div
							id="carousel"
							className="carousel w-full h-[482px] p-[216px] pl-[100px]"
						>
							<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
								40% OFF
							</h2>
							<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
								Best deals this week. Fresh flowers, plants and gifts
							</p>
							<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px] active:bg-[#595CFF]">
								Shop now <img src={right} className="pt-1 " alt="right" />
							</button>
						</div>
					</Carousel>
				</section>
				<section className="new">
					<div>
						<div className="flex justify-between mt-[47px] mb-[44px]">
							<h2 className=" text-[24px] font-medium ">New</h2>
							<div className="flex gap-x-[19px] mr-[80px]">
								<img
									src={leftGrey}
									alt="left"
									className=" hover:shadow-md  hover:border"
								/>
								<img
									src={rightBlack}
									alt="right"
									className=" hover:shadow-md  hover:border"
								/>
							</div>
						</div>
						<div className="flex gap-x-[40px]">
							{newFlowers.map((flowers, index) => {
								return <Cards state={flowers} key={index} />;
							})}
						</div>
					</div>
				</section>

				<section className="relevant mt-[93px]">
					<div>
						<div className="flex justify-between mt-[47px] mb-[44px]">
							<h2 className=" text-[24px] font-medium ">Relevant</h2>
							<div className="flex gap-x-[19px] mr-[80px]">
								<img
									src={leftGrey}
									alt="left"
									className=" hover:shadow-3xl  hover:border"
								/>
								<img
									src={rightBlack}
									alt="right"
									className=" hover:shadow-3xl  hover:border"
								/>
							</div>
						</div>
						<div className="flex gap-x-[40px]">
							{relevant.map((flowers, index) => {
								return <Cards state={flowers} key={index} />;
							})}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default index;