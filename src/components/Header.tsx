import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link component

import logo from '../assets/sdlogo.png'; // Import the image here

const Header: React.FC = () => {
	return (
		<AppBar position="static" sx={{backgroundColor: 'black'}}>
			<Toolbar>
				{/* Use the imported image here */}
				<img src={logo} alt="Company Logo" style={{ width: '200px', height: 'auto' }} />

				<div style={{ flexGrow: 1 }} />
				{/* Use Link components for navigation */}
				<Button color="inherit" component={Link} to="/">
					HOME
				</Button>
				<Button color="inherit" component={Link} to="/about-us">
					ABOUT US
				</Button>
				<Button color="inherit" component={Link} to="/runs-for-sale">
					RUNS FOR SALE
				</Button>
				<Button color="inherit" component={Link} to="/linehaul-bootcamp">
					LINEHAUL BOOTCAMP
				</Button>
				<Button color="inherit" component={Link} to="/srs-calculator">
					SRS CALCULATOR
				</Button>
                <div style={{ flexGrow: 1 }} />
				<IconButton color="inherit">
					<Notifications />
				</IconButton>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;