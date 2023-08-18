import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";
import leftGrey from "../../assets/icons/leftGrey.svg";
import rightBlack from "../../assets/icons/rightBlack.svg";
import "./style.scss";
import data from "../../server/db";
import { Carousel } from "antd";
import Cards from "../../components/UI/Cards";

const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};
const index = () => {
	const { newFlowers } = data;
	const { relevant } = data;
	return (
		<div className="container ">
			<div className="wrapper mt-[198px]">
				<Carousel autoplay>
					<div className="carousel w-full h-[220px] p-[43px] pl-[80px]">
						<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
							40% OFF
						</h2>
						<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
							Best deals this week. Fresh flowers, plants and gifts
						</p>
						<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px] hover:bg-[#595CFF]  active:bg-[#595CFF]">
							Shop now <img src={right} className="pt-1 " alt="right" />
						</button>
					</div>
					<div className="carousel w-full h-[220px] p-[43px] pl-[80px]">
						<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
							40% OFF
						</h2>
						<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
							Best deals this week. Fresh flowers, plants and gifts
						</p>
						<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px]">
							Shop now <img src={right} className="pt-1" alt="right" />
						</button>
					</div>
					<div className="carousel w-full h-[220px] p-[43px] pl-[80px]">
						<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
							40% OFF
						</h2>
						<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
							Best deals this week. Fresh flowers, plants and gifts
						</p>
						<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px]">
							Shop now <img src={right} className="pt-1" alt="right" />
						</button>
					</div>
					<div className="carousel w-full h-[220px] p-[43px] pl-[80px]">
						<h2 className=" text-[28px] font-medium leading-0 mt-[-8px]  mb-[-8px]">
							40% OFF
						</h2>
						<p className="pt-[10px] pb-[24px] text-[18px] font-medium">
							Best deals this week. Fresh flowers, plants and gifts
						</p>
						<button className="w-[138px] h-[50px] bg-black text-white rounded flex items-center justify-center gap-[12px]">
							Shop now <img src={right} className="pt-1" alt="right" />
						</button>
					</div>
				</Carousel>

				<section className="cards flex items-center justify-between mt-[40px]">
					<div className="card1 w-[48%] h-[221px] p-[46px] pl-[80px] hover:shadow-lg">
						<h2 className="text-[28px] leading-0 font-medium">
							Nice little gifts
						</h2>
						<p className="text-[18px]  font-medium">for loved ones</p>
						<div className="flex gap-x-3 mt-[27.5px] cursor-pointer">
							<a href="#">View now</a>
							<img
								src={left}
								alt="right"
								className=" hover:shadow-3xl  hover:border"
							/>
						</div>
					</div>
					<div className="card2 w-[48%] h-[221px] p-[46px] pl-[80px] hover:shadow-lg">
						<h2 className="text-[28px] leading-0 font-medium">
							Nice little gifts
						</h2>
						<p className="text-[18px]  font-medium">for loved ones</p>
						<div className="flex gap-x-3 mt-[27.5px] cursor-pointer">
							<a href="#">View now</a>
							<img
								src={left}
								alt="right"
								className=" hover:shadow-3xl  hover:border"
							/>
						</div>
					</div>
				</section>

				<section className="new ">
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
