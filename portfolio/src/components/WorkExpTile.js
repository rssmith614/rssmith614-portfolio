import React from 'react';

import Card from '@mui/material/Card';
import { CardHeader, Typography, CardContent } from "@mui/material";

export default function WorkExpTile({ workExp }) {
	return (
		<Card elevation={5} >
			<CardHeader
				title={workExp.title}
				subheader={`${workExp.company}`} />
			<CardContent>
				<Typography variant='body'>
					{workExp.description}
				</Typography>
				<Typography variant='subtitle2' color="text.secondary" pt={ 2 }>
					{workExp.start} - {workExp.end}
				</Typography>
			</CardContent>
		</Card>
	);
}