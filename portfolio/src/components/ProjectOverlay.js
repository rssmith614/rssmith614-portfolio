import React from 'react';

import Card from '@mui/material/Card';
import { CardHeader, IconButton, Typography, CardContent } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectOverlay({ project }) {

  const cardStyle = {
    minWidth: 275,
    maxWidth: '75%',
    margin: 'auto',
    border: 5,
    borderColor: 'info.main',
    borderRadius: 'shape.borderRadius'
    // height: 500,
  };

  if (typeof project === 'undefined') {
    return (<></>);
  }

  return (
    <Card sx={cardStyle} elevation={20} >
      {project.github !== '' ?
      <CardHeader 
        title={project.name}
        subheader={`${project.type} Project`}
        action={
          <IconButton aria-label="GitHub Repository Link" href={project.github} color="primary">
            <GitHubIcon />
          </IconButton>
        }
      />
      :
      <CardHeader 
        title={project.name}
        subheader={`${project.type} Project`}
      />}
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Tags: {project.tags}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
          Tech Stack: {project.stack}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxHeight:300, overflowY:'scroll' }}>
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pt:3 }}>
          {project.date}
        </Typography>
      </CardContent>
    </Card>
  );
}