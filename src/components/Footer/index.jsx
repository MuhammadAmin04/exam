import React from "react";
import Instagram from "../../assets/icons/icon.svg";
import Whatsapp from "../../assets/icons/icon1.svg";
import Facebook from "../../assets/icons/icon2.svg";
import "./style.scss";

const index = () => {
	return (
		<footer className="mt-[100px] bg-[#F9F9FB]">
			<div className="container">
				<div className="py-[60px] flex justify-between items-start border-b">
					<ul className="flex flex-col gap-[18px]">
						<li>
							<h5>Tursunmuhammadov</h5>
						</li>
						<li>
							<a href="" className="tel">
								+998991234567
							</a>
						</li>
						<li className="flex items-center gap-5">
							<a href="#">
								<img src={Instagram} alt="Instagram icon" />
							</a>
							<a href="#">
								<img src={Whatsapp} alt="Whatsapp icon" />
							</a>
							<a href="#">
								<img src={Facebook} alt="Facebook icon" />
							</a>
						</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li>
							<h5 className="text-[16px] font-normal">Help</h5>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Contact us
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Delivery information
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Payment information
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Customer service
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								FAQ
							</a>
						</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li>
							<h5 className="text-[16px] font-normal">About us</h5>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Our Stores
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Flower care
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Site map
							</a>
						</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li>
							<h5 className="text-[16px] font-normal">Legal</h5>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Privacy policy
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Terms & Conditions
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Cookie policy
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Item 4
							</a>
						</li>
						<li>
							<a href="" className="text-[14px] font-medium">
								Item 5
							</a>
						</li>
					</ul>
				</div>

				<div className="pt-5 pb-8">
					<p className="text-xs text-[#AFB1BD]">© Copyright, SERIUS </p>
				</div>
			</div>
		</footer>
	);
};

export default index;
