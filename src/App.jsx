import Header from "./components/Header"
import Flowers from "./pages/Flowers";
import Error from "./pages/Error";
import Plants from "./pages/Plants";
import Gifts from "./pages/Gifts";
import Discounts from "./pages/Discounts";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer"
import Dynamic from "./pages/Dynamic/singleId.jsx";


const App = () => {
  return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/flowers" element={<Flowers />} />
				<Route path="/flowers/:productId" element={<Dynamic />} />
				<Route path="/plants" element={<Plants />} />
				<Route path="/gifts" element={<Gifts />} />
				<Route path="/discount" element={<Discounts />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;