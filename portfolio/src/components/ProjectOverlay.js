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
        subheader={project.date}
        action={
          <IconButton aria-label="GitHub Repository Link" href={project.github} color="secondary">
            <GitHubIcon />
          </IconButton>
        }
      />
      :
      <CardHeader 
        title={project.name}
        subheader={project.date}
      />}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.type} Project
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ pb: 3 }}>
          Tags: {project.tags}
        </Typography>
        <Typography variant="body1">
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pt:3 }}>
          Tech Stack: {project.stack}
        </Typography>
      </CardContent>
    </Card>
  );
}