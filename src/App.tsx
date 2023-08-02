import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import RunsForSale from './pages/RunsForSale';
import LinehaulBootcamp from './pages/LinehaulBootcamp';
import SRSCalculator from './pages/SRSCalculator';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes >
					<Route path="/client/about-us" element={<AboutUs />} />
					<Route path="/client/runs-for-sale" element={<RunsForSale />} />
					<Route path="/client/linehaul-bootcamp" element={<LinehaulBootcamp />} />
					<Route path="/client/srs-calculator" element={<SRSCalculator />} />
					<Route path="/client" element={<Home />} />
				</Routes >
			</div>
		</Router>
	);
};

export default App;