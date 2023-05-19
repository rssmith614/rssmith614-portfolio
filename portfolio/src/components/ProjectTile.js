import React from 'react';

import Card from '@mui/material/Card';
import { CardHeader, CardMedia, CardActionArea, Typography, CardContent } from "@mui/material";

export default function ProjectTile({ project, onSelected }) {
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelected(project)
  };

  const cardStyle = {
    minWidth: 275,
    // height: 500,
  };

  return (
    <CardActionArea onClick={handleClick}>
      <Card sx={cardStyle} elevation={10} >
        {project.thumbnail !== null ?
          <CardMedia
            component="img"
            max-height="50%"
            height="200"
            // objectFit="cover"
            image={process.env.PUBLIC_URL + "/images/" + project.thumbnail}
            alt={project.thumbnail}
          />
          :
          <></>
        }
        <CardHeader 
          title={project.name} 
          subheader={project.date} 
        />
        <CardContent>
          <Typography variant='body1'>
            {project.tags}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}