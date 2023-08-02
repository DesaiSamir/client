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
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/runs-for-sale" element={<RunsForSale />} />
					<Route path="/linehaul-bootcamp" element={<LinehaulBootcamp />} />
					<Route path="/srs-calculator" element={<SRSCalculator />} />
					<Route path="/" element={<Home />} />
				</Routes >
			</div>
		</Router>
	);
};

export default App;



					// <Route path="/about-us" Component={AboutUs} />
					// <Route path="/runs-for-sale" Component={RunsForSale} />
					// <Route path="/linehaul-bootcamp" Component={LinehaulBootcamp} />
					// <Route path="/srs-calculator" Component={SRSCalculator} />
					// <Route path="/" Component={Home} /> 