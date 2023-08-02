import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const SRSCalculator: React.FC = () => {
    return (
		<Container maxWidth="lg" style={{ overflow: 'hidden' }}>
			<Paper elevation={3} style={{ height: 'calc(100vh - 45px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" gutterBottom>
                    SRS Calculator Content Goes here
                </Typography>
			</Paper>
		</Container>
	);
};

export default SRSCalculator;