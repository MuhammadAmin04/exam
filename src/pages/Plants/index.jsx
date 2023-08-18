import React from "react";
import { Breadcrumb, Button, Dropdown } from "antd";
import dropdown from "../../assets/icons/dropdown.svg"
import data from "../../server/db"
import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";
import leftGrey from "../../assets/icons/leftGrey.svg";
import rightBlack from "../../assets/icons/rightBlack.svg";
import Cards from "../../components/UI/card"
import { useState } from "react";

const items = [
	{
		key: "1",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.antgroup.com"
			>
				1st menu item
			</a>
		),
	},
	{
		key: "2",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.aliyun.com"
			>
				2nd menu item
			</a>
		),
	},
	{
		key: "3",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.luohanacademy.com"
			>
				3rd menu item
			</a>
		),
	},
];

export default () => {
	
	const [isToggled, setIsToggled] = useState(false); 
	const { plants } = data;

	 const toggle = () => {
			setIsToggled((prevState) => !prevState);
		};

	return (
		<div className="container">
			<Breadcrumb
				className="mt-[200px] h-[51px]"
				routes={[
					{
						href: "/",
						breadcrumbName: "Home",
					},
					{
						href: "/plants",
						breadcrumbName: "Plants",
					},
				]}
			/>

			<section className="mt-5 ">
				<h2 className="text-[32px] font-medium mb-10">All Plants</h2>

				<div className="flex  justify-between">
					<div className=" flex gap-x-[80px]">
						<Dropdown
							menu={{
								items,
							}}
							placement="bottom"
						>
							<Button className="flex items-center gap-[14px] w-[72px] h-[20px] border-none">
								Sort by <img src={dropdown} alt="dropdown" className=" pt-1" />
							</Button>
						</Dropdown>
						<Dropdown
							menu={{
								items,
							}}
							placement="bottom"
						>
							<Button className="flex items-center gap-[14px] w-[72px] h-[20px] border-none">
								Color <img src={dropdown} alt="dropdown" className=" pt-1" />
							</Button>
						</Dropdown>
						<Dropdown
							menu={{
								items,
							}}
							placement="bottom"
						>
							<Button className="flex items-center gap-[14px] w-[72px] h-[20px] border-none">
								Price <img src={dropdown} alt="dropdown" className=" pt-1" />
							</Button>
						</Dropdown>
						<Dropdown
							menu={{
								items,
							}}
							placement="bottom"
						>
							<Button className="flex items-center gap-[14px] w-[72px] h-[20px] border-none">
								Flower type{" "}
								<img src={dropdown} alt="dropdown" className=" pt-1" />
							</Button>
						</Dropdown>
						<Dropdown
							menu={{
								items,
							}}
							placement="bottom"
						>
							<Button className="flex items-center gap-[14px] w-[72px] h-[20px] border-none">
								Occasion <img src={dropdown} alt="dropdown" className=" pt-1" />
							</Button>
						</Dropdown>
					</div>
					<div>
						<p className="text-[16px] font-normal">24 items</p>
					</div>
				</div>

				<div className="w-full h-[2px] mt-[20px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1161"
						height="2"
						viewBox="0 0 1161 2"
						fill="none"
					>
						<path
							d="M0.5 1.4375H1159.75"
							stroke="#E6E6EB"
							stroke-linecap="square"
						/>
					</svg>
				</div>

				<div className="relevant">
					<div>
						<div className="flex justify-between mt-[47px] mb-[44px]"></div>
						<div className="flex justify-between gap-y-10 flex-wrap">
							{plants.map((flowers, index) => {
								return <Cards state={flowers} key={index} />;
							})}
						</div>
					</div>
				</div>

				<div className=" mt-10 ">
					<button
						onClick={toggle}
						className="w-[223px] h-[46px] bg-black text-white rounded-md mb-10 ml-[469px]"
					>
						{isToggled ? "Turn Off" : "See more"}
					</button>
					{isToggled && (
						<div className="flex justify-between gap-y-10 flex-wrap">
							{plants.map((flowers, index) => {
								return <Cards state={flowers} key={index} />;
							})}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};
