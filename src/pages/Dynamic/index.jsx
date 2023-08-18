import React from "react";
import { useState } from "react";
import { useParams , Link} from "react-router-dom";
import { Collapse } from "antd";
import products from '../../server/db'

const Dynamic = () => {

 
  const { productId } = useParams();

	const product = products.find((product) => product.id === productId);

	const { image , title , price , discount } = product;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
	{
		key: "1",
		label: "Bouquet contents",
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: "Details",
		children: <p>{text}</p>,
	},
	{
		key: "3",
		label: "Delivery & Pay policy",
		children: <p>{text}</p>,
	},
];

	const onChange = (key) => {
		console.log(key);
	};
	const [counter, setCounter] = useState(0);
	function btn1() {
		const greyBtn = document.querySelector(".greyBtn");

		greyBtn.classList.add(
			"outline",
			"outline-[#595CFF]",
			"scale-[0.8]",
			"outline-offset-2"
		);
	}
	function btn2() {
		const redBtn = document.querySelector(".redBtn");

		redBtn.classList.add(
			"outline",
			"outline-[#595CFF]",
			"scale-[0.8]",
			"outline-offset-2"
		);
	}
	function btn3() {
		const orangeBtn = document.querySelector(".orangeBtn");

		orangeBtn.classList.add(
			"outline",
			"outline-[#595CFF]",
			"scale-[0.8]",
			"outline-offset-2"
		);
	}
	return (
		<div className="container">
			<div className="flex mb-[160px] mt-[198px]">
				<div className="left flex flex-col mr-[72px]  min-w-[568px]">
					<img
						className="w-[568px] h-[568px]"
						src={image}
						alt="rasm"
					/>
					<div className="icons flex items-center justify-center max-w-[506px] gap-[40px] mt-[20px]">
						<div className="max-w-[142px] flex items-center justify-center gap-[10px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="46"
								height="46"
								viewBox="0 0 46 46"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0ZM23 1C10.8497 1 1 10.8497 1 23C1 35.1503 10.8497 45 23 45C35.1503 45 45 35.1503 45 23C45 10.8497 35.1503 1 23 1ZM14.68 25.944C14.6427 25.9813 14.5947 26 14.536 26H13.816C13.7627 26 13.7173 25.9813 13.68 25.944C13.6427 25.9067 13.624 25.8613 13.624 25.808V20.6C13.624 20.5413 13.6413 20.4933 13.676 20.456C13.7107 20.4187 13.7573 20.4 13.816 20.4H17.296C17.3547 20.4 17.4027 20.4187 17.44 20.456C17.4773 20.4933 17.496 20.5413 17.496 20.6V21.176C17.496 21.2293 17.4773 21.2747 17.44 21.312C17.4027 21.3493 17.3547 21.368 17.296 21.368H14.736V22.872H17.136C17.1947 22.872 17.2427 22.8907 17.28 22.928C17.3173 22.9653 17.336 23.0107 17.336 23.064V23.64C17.336 23.6933 17.3173 23.7387 17.28 23.776C17.2427 23.8133 17.1947 23.832 17.136 23.832H14.736V25.808C14.736 25.8613 14.7173 25.9067 14.68 25.944ZM19.512 25.944C19.4747 25.9813 19.4267 26 19.368 26H18.632C18.5787 26 18.5333 25.9813 18.496 25.944C18.4587 25.9067 18.44 25.8613 18.44 25.808V20.6C18.44 20.5413 18.4573 20.4933 18.492 20.456C18.5267 20.4187 18.5733 20.4 18.632 20.4H20.704C21.36 20.4 21.8733 20.552 22.244 20.856C22.6147 21.16 22.8 21.592 22.8 22.152C22.8 22.5413 22.7067 22.868 22.52 23.132C22.3333 23.396 22.072 23.5867 21.736 23.704L22.896 25.744C22.912 25.776 22.92 25.8053 22.92 25.832C22.92 25.88 22.9027 25.92 22.868 25.952C22.8333 25.984 22.7947 26 22.752 26H22.016C21.9307 26 21.864 25.98 21.816 25.94C21.768 25.9 21.7253 25.848 21.688 25.784L20.664 23.888H19.568V25.808C19.568 25.8613 19.5493 25.9067 19.512 25.944ZM19.568 22.976H20.68C21 22.976 21.24 22.9053 21.4 22.764C21.56 22.6227 21.64 22.416 21.64 22.144C21.64 21.872 21.56 21.6627 21.4 21.516C21.24 21.3693 21 21.296 20.68 21.296H19.568V22.976ZM27.816 25.808C27.816 25.8667 27.7973 25.9133 27.76 25.948C27.7227 25.9827 27.6747 26 27.616 26H24.024C23.9707 26 23.9253 25.9813 23.888 25.944C23.8507 25.9067 23.832 25.8613 23.832 25.808V20.6C23.832 20.5413 23.8493 20.4933 23.884 20.456C23.9187 20.4187 23.9653 20.4 24.024 20.4H27.552C27.6107 20.4 27.6587 20.4187 27.696 20.456C27.7333 20.4933 27.752 20.5413 27.752 20.6V21.136C27.752 21.1947 27.7333 21.2413 27.696 21.276C27.6587 21.3107 27.6107 21.328 27.552 21.328H24.928V22.728H27.376C27.4347 22.728 27.4827 22.7467 27.52 22.784C27.5573 22.8213 27.576 22.8693 27.576 22.928V23.432C27.576 23.4907 27.5573 23.5373 27.52 23.572C27.4827 23.6067 27.4347 23.624 27.376 23.624H24.928V25.072H27.616C27.6747 25.072 27.7227 25.0893 27.76 25.124C27.7973 25.1587 27.816 25.2053 27.816 25.264V25.808ZM32.8 25.808C32.8 25.8667 32.7813 25.9133 32.744 25.948C32.7067 25.9827 32.6587 26 32.6 26H29.008C28.9547 26 28.9093 25.9813 28.872 25.944C28.8347 25.9067 28.816 25.8613 28.816 25.808V20.6C28.816 20.5413 28.8333 20.4933 28.868 20.456C28.9027 20.4187 28.9493 20.4 29.008 20.4H32.536C32.5947 20.4 32.6427 20.4187 32.68 20.456C32.7173 20.4933 32.736 20.5413 32.736 20.6V21.136C32.736 21.1947 32.7173 21.2413 32.68 21.276C32.6427 21.3107 32.5947 21.328 32.536 21.328H29.912V22.728H32.36C32.4187 22.728 32.4667 22.7467 32.504 22.784C32.5413 22.8213 32.56 22.8693 32.56 22.928V23.432C32.56 23.4907 32.5413 23.5373 32.504 23.572C32.4667 23.6067 32.4187 23.624 32.36 23.624H29.912V25.072H32.6C32.6587 25.072 32.7067 25.0893 32.744 25.124C32.7813 25.1587 32.8 25.2053 32.8 25.264V25.808Z"
									fill="black"
								/>
							</svg>
							<p className="text-[12px] font-[Regular]">Benefits description</p>
						</div>
						<div className="max-w-[142px] flex items-center justify-center gap-[10px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="46"
								height="46"
								viewBox="0 0 46 46"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0ZM23 1C10.8497 1 1 10.8497 1 23C1 35.1503 10.8497 45 23 45C35.1503 45 45 35.1503 45 23C45 10.8497 35.1503 1 23 1ZM14.68 25.944C14.6427 25.9813 14.5947 26 14.536 26H13.816C13.7627 26 13.7173 25.9813 13.68 25.944C13.6427 25.9067 13.624 25.8613 13.624 25.808V20.6C13.624 20.5413 13.6413 20.4933 13.676 20.456C13.7107 20.4187 13.7573 20.4 13.816 20.4H17.296C17.3547 20.4 17.4027 20.4187 17.44 20.456C17.4773 20.4933 17.496 20.5413 17.496 20.6V21.176C17.496 21.2293 17.4773 21.2747 17.44 21.312C17.4027 21.3493 17.3547 21.368 17.296 21.368H14.736V22.872H17.136C17.1947 22.872 17.2427 22.8907 17.28 22.928C17.3173 22.9653 17.336 23.0107 17.336 23.064V23.64C17.336 23.6933 17.3173 23.7387 17.28 23.776C17.2427 23.8133 17.1947 23.832 17.136 23.832H14.736V25.808C14.736 25.8613 14.7173 25.9067 14.68 25.944ZM19.512 25.944C19.4747 25.9813 19.4267 26 19.368 26H18.632C18.5787 26 18.5333 25.9813 18.496 25.944C18.4587 25.9067 18.44 25.8613 18.44 25.808V20.6C18.44 20.5413 18.4573 20.4933 18.492 20.456C18.5267 20.4187 18.5733 20.4 18.632 20.4H20.704C21.36 20.4 21.8733 20.552 22.244 20.856C22.6147 21.16 22.8 21.592 22.8 22.152C22.8 22.5413 22.7067 22.868 22.52 23.132C22.3333 23.396 22.072 23.5867 21.736 23.704L22.896 25.744C22.912 25.776 22.92 25.8053 22.92 25.832C22.92 25.88 22.9027 25.92 22.868 25.952C22.8333 25.984 22.7947 26 22.752 26H22.016C21.9307 26 21.864 25.98 21.816 25.94C21.768 25.9 21.7253 25.848 21.688 25.784L20.664 23.888H19.568V25.808C19.568 25.8613 19.5493 25.9067 19.512 25.944ZM19.568 22.976H20.68C21 22.976 21.24 22.9053 21.4 22.764C21.56 22.6227 21.64 22.416 21.64 22.144C21.64 21.872 21.56 21.6627 21.4 21.516C21.24 21.3693 21 21.296 20.68 21.296H19.568V22.976ZM27.816 25.808C27.816 25.8667 27.7973 25.9133 27.76 25.948C27.7227 25.9827 27.6747 26 27.616 26H24.024C23.9707 26 23.9253 25.9813 23.888 25.944C23.8507 25.9067 23.832 25.8613 23.832 25.808V20.6C23.832 20.5413 23.8493 20.4933 23.884 20.456C23.9187 20.4187 23.9653 20.4 24.024 20.4H27.552C27.6107 20.4 27.6587 20.4187 27.696 20.456C27.7333 20.4933 27.752 20.5413 27.752 20.6V21.136C27.752 21.1947 27.7333 21.2413 27.696 21.276C27.6587 21.3107 27.6107 21.328 27.552 21.328H24.928V22.728H27.376C27.4347 22.728 27.4827 22.7467 27.52 22.784C27.5573 22.8213 27.576 22.8693 27.576 22.928V23.432C27.576 23.4907 27.5573 23.5373 27.52 23.572C27.4827 23.6067 27.4347 23.624 27.376 23.624H24.928V25.072H27.616C27.6747 25.072 27.7227 25.0893 27.76 25.124C27.7973 25.1587 27.816 25.2053 27.816 25.264V25.808ZM32.8 25.808C32.8 25.8667 32.7813 25.9133 32.744 25.948C32.7067 25.9827 32.6587 26 32.6 26H29.008C28.9547 26 28.9093 25.9813 28.872 25.944C28.8347 25.9067 28.816 25.8613 28.816 25.808V20.6C28.816 20.5413 28.8333 20.4933 28.868 20.456C28.9027 20.4187 28.9493 20.4 29.008 20.4H32.536C32.5947 20.4 32.6427 20.4187 32.68 20.456C32.7173 20.4933 32.736 20.5413 32.736 20.6V21.136C32.736 21.1947 32.7173 21.2413 32.68 21.276C32.6427 21.3107 32.5947 21.328 32.536 21.328H29.912V22.728H32.36C32.4187 22.728 32.4667 22.7467 32.504 22.784C32.5413 22.8213 32.56 22.8693 32.56 22.928V23.432C32.56 23.4907 32.5413 23.5373 32.504 23.572C32.4667 23.6067 32.4187 23.624 32.36 23.624H29.912V25.072H32.6C32.6587 25.072 32.7067 25.0893 32.744 25.124C32.7813 25.1587 32.8 25.2053 32.8 25.264V25.808Z"
									fill="black"
								/>
							</svg>
							<p className="text-[12px] font-[Regular]">
								Always fresh flowers{" "}
							</p>
						</div>
						<div className="max-w-[142px] flex items-center justify-center gap-[10px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="46"
								height="46"
								viewBox="0 0 46 46"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0ZM23 1C10.8497 1 1 10.8497 1 23C1 35.1503 10.8497 45 23 45C35.1503 45 45 35.1503 45 23C45 10.8497 35.1503 1 23 1ZM14.68 25.944C14.6427 25.9813 14.5947 26 14.536 26H13.816C13.7627 26 13.7173 25.9813 13.68 25.944C13.6427 25.9067 13.624 25.8613 13.624 25.808V20.6C13.624 20.5413 13.6413 20.4933 13.676 20.456C13.7107 20.4187 13.7573 20.4 13.816 20.4H17.296C17.3547 20.4 17.4027 20.4187 17.44 20.456C17.4773 20.4933 17.496 20.5413 17.496 20.6V21.176C17.496 21.2293 17.4773 21.2747 17.44 21.312C17.4027 21.3493 17.3547 21.368 17.296 21.368H14.736V22.872H17.136C17.1947 22.872 17.2427 22.8907 17.28 22.928C17.3173 22.9653 17.336 23.0107 17.336 23.064V23.64C17.336 23.6933 17.3173 23.7387 17.28 23.776C17.2427 23.8133 17.1947 23.832 17.136 23.832H14.736V25.808C14.736 25.8613 14.7173 25.9067 14.68 25.944ZM19.512 25.944C19.4747 25.9813 19.4267 26 19.368 26H18.632C18.5787 26 18.5333 25.9813 18.496 25.944C18.4587 25.9067 18.44 25.8613 18.44 25.808V20.6C18.44 20.5413 18.4573 20.4933 18.492 20.456C18.5267 20.4187 18.5733 20.4 18.632 20.4H20.704C21.36 20.4 21.8733 20.552 22.244 20.856C22.6147 21.16 22.8 21.592 22.8 22.152C22.8 22.5413 22.7067 22.868 22.52 23.132C22.3333 23.396 22.072 23.5867 21.736 23.704L22.896 25.744C22.912 25.776 22.92 25.8053 22.92 25.832C22.92 25.88 22.9027 25.92 22.868 25.952C22.8333 25.984 22.7947 26 22.752 26H22.016C21.9307 26 21.864 25.98 21.816 25.94C21.768 25.9 21.7253 25.848 21.688 25.784L20.664 23.888H19.568V25.808C19.568 25.8613 19.5493 25.9067 19.512 25.944ZM19.568 22.976H20.68C21 22.976 21.24 22.9053 21.4 22.764C21.56 22.6227 21.64 22.416 21.64 22.144C21.64 21.872 21.56 21.6627 21.4 21.516C21.24 21.3693 21 21.296 20.68 21.296H19.568V22.976ZM27.816 25.808C27.816 25.8667 27.7973 25.9133 27.76 25.948C27.7227 25.9827 27.6747 26 27.616 26H24.024C23.9707 26 23.9253 25.9813 23.888 25.944C23.8507 25.9067 23.832 25.8613 23.832 25.808V20.6C23.832 20.5413 23.8493 20.4933 23.884 20.456C23.9187 20.4187 23.9653 20.4 24.024 20.4H27.552C27.6107 20.4 27.6587 20.4187 27.696 20.456C27.7333 20.4933 27.752 20.5413 27.752 20.6V21.136C27.752 21.1947 27.7333 21.2413 27.696 21.276C27.6587 21.3107 27.6107 21.328 27.552 21.328H24.928V22.728H27.376C27.4347 22.728 27.4827 22.7467 27.52 22.784C27.5573 22.8213 27.576 22.8693 27.576 22.928V23.432C27.576 23.4907 27.5573 23.5373 27.52 23.572C27.4827 23.6067 27.4347 23.624 27.376 23.624H24.928V25.072H27.616C27.6747 25.072 27.7227 25.0893 27.76 25.124C27.7973 25.1587 27.816 25.2053 27.816 25.264V25.808ZM32.8 25.808C32.8 25.8667 32.7813 25.9133 32.744 25.948C32.7067 25.9827 32.6587 26 32.6 26H29.008C28.9547 26 28.9093 25.9813 28.872 25.944C28.8347 25.9067 28.816 25.8613 28.816 25.808V20.6C28.816 20.5413 28.8333 20.4933 28.868 20.456C28.9027 20.4187 28.9493 20.4 29.008 20.4H32.536C32.5947 20.4 32.6427 20.4187 32.68 20.456C32.7173 20.4933 32.736 20.5413 32.736 20.6V21.136C32.736 21.1947 32.7173 21.2413 32.68 21.276C32.6427 21.3107 32.5947 21.328 32.536 21.328H29.912V22.728H32.36C32.4187 22.728 32.4667 22.7467 32.504 22.784C32.5413 22.8213 32.56 22.8693 32.56 22.928V23.432C32.56 23.4907 32.5413 23.5373 32.504 23.572C32.4667 23.6067 32.4187 23.624 32.36 23.624H29.912V25.072H32.6C32.6587 25.072 32.7067 25.0893 32.744 25.124C32.7813 25.1587 32.8 25.2053 32.8 25.264V25.808Z"
									fill="black"
								/>
							</svg>
							<p className="text-[12px] font-[Regular]">
								Take photo of bouquet{" "}
							</p>
						</div>
					</div>
				</div>
				<div className="right w-full">
					<div>
						<h1 className="text-[24px] font-[Medium] mt-[-4px] mb-[-4px] pb-[20px]">
							{title}
						</h1>
						<div className="flex gap-[20px] h-[28px]">
							<p className="text-[28px] font-[Medium] mt-[-7px] mb-[-7px]">
								{price}
							</p>
							<p className="text-[18px] font-[Medium] text-[#82828B] line-through mt-[4px]">
								60 $
							</p>
						</div>
					</div>
					<hr className="mt-[15px] mb-[40px]" />
					<div className="mb-[38px]">
						<h3 className="font-[Regular]">Count:</h3>
						<div className="flex mt-[24.5px] gap-[5px]">
							<button
								onClick={() => setCounter(counter + 1)}
								className="w-[24px] h-[24px] bg-[#F0F0F5] rounded-full flex items-center justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="11"
									height="11"
									viewBox="0 0 11 11"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.2998 10.5C5.74163 10.5 6.0998 10.1418 6.0998 9.7V6.22727H9.57253C9.97419 6.22727 10.2998 5.90166 10.2998 5.5C10.2998 5.09834 9.97419 4.77273 9.57253 4.77273H6.0998V1.3C6.0998 0.858172 5.74163 0.5 5.2998 0.5C4.85798 0.5 4.4998 0.858173 4.4998 1.3V4.77273H1.02708C0.625416 4.77273 0.299805 5.09834 0.299805 5.5C0.299805 5.90166 0.625415 6.22727 1.02708 6.22727H4.4998V9.7C4.4998 10.1418 4.85798 10.5 5.2998 10.5Z"
										fill="#595CFF"
									/>
								</svg>
							</button>
							<p className="w-[49px] flex items-center justify-center text-[14px] font-[Medium]">
								{counter}
							</p>
							<button
								onClick={() => setCounter(counter - 1)}
								className="w-[24px] h-[24px] bg-[#F0F0F5] rounded-full flex items-center justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="11"
									height="11"
									viewBox="0 0 11 11"
									fill="none"
								>
									<rect
										x="0.299805"
										y="6.29999"
										width="1.6"
										height="10"
										rx="0.8"
										transform="rotate(-90 0.299805 6.29999)"
										fill="#595CFF"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div>
						<h3 className="font-[Regular]">Color:</h3>
						<div className="flex gap-[19px] mt-[20px] mb-[54px]">
							<div
								onClick={btn1}
								className="greyBtn w-[36px] h-[36px] rounded-full bg-[#F0F0F5]"
							></div>
							<div
								onClick={btn2}
								className="redBtn w-[36px] h-[36px] rounded-full bg-[#EE7764]"
							></div>
							<div
								onClick={btn3}
								className="orangeBtn w-[36px] h-[36px] rounded-full bg-[#FFBC2C]"
							></div>
						</div>
					</div>
					<div className="flex gap-[20px] mb-[40px]">
						<button className="bg-[#595CFF] font-[Medium] text-[14px] w-[309px] h-[56px] flex items-center justify-center text-white rounded-md">
							Button
						</button>
						<button className="border w-[56px] h-[56px] flex items-center justify-center rounded-md">
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
									d="M6.98421 5.66663L6.71575 4.51331C6.50676 3.62373 5.7579 2.99995 4.89901 3H4V4.33331H4.89901C5.19287 4.32417 5.45289 4.53519 5.52332 4.83997L7.74587 14.4932L7.97686 15.4865C8.18752 16.3833 8.94647 17.0091 9.81234 16.9998H18.3592V15.6665H9.81234C9.51848 15.6756 9.25846 15.4646 9.18803 15.1598L9.11311 14.8265L18.3592 12.4999C19.0427 12.3302 19.5801 11.7666 19.7514 11.0399L21 5.66663H6.98421ZM18.5652 10.7199C18.5074 10.9633 18.3264 11.1515 18.097 11.2065L8.82593 13.5332L7.29636 6.99994H19.433L18.5652 10.7199ZM7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19ZM8.33333 19C8.33333 19.3682 8.63181 19.6667 9 19.6667C9.36819 19.6667 9.66667 19.3682 9.66667 19C9.66667 18.6318 9.36819 18.3333 9 18.3333C8.63181 18.3333 8.33333 18.6318 8.33333 19ZM14.1523 18.2346C14.4619 17.4873 15.1911 17 16 17C17.1046 17 18 17.8954 18 19C18 19.8089 17.5127 20.5381 16.7654 20.8477C16.018 21.1573 15.1578 20.9862 14.5858 20.4142C14.0138 19.8422 13.8427 18.982 14.1523 18.2346ZM15.3334 19C15.3334 19.3682 15.6318 19.6666 16 19.6666C16.3682 19.6666 16.6667 19.3682 16.6667 19C16.6667 18.6318 16.3682 18.3333 16 18.3333C15.6318 18.3333 15.3334 18.6318 15.3334 19Z"
									fill="black"
								/>
							</svg>
						</button>
					</div>
					<div>
						<Collapse
							items={items}
							// defaultActiveKey={["1"]}
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dynamic;