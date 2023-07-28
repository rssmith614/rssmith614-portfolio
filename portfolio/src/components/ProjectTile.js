import { useState } from 'react';

import Card from '@mui/material/Card';
import { CardHeader, CardMedia, CardActionArea, Typography, CardContent } from "@mui/material";

export default function ProjectTile({ project, onSelected }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelected(project)
  };

  const cardStyle = {
    minWidth: 275,
    // height: 500,
  };

  var mediaComp = null;
  if (project.thumbnail !== null) {
    mediaComp = project.thumbnail.split(".")[1] === "mp4" ? "video" : "img";
  }

  // console.log(project.thumbnail.split(".")[1] === "mp4")

  return (
    <CardActionArea onClick={handleClick}>
      <Card sx={cardStyle} elevation={10} >
        {project.thumbnail !== null ?
          <CardMedia
            component={mediaComp}
            // max-height="50%"
            height="200"
            // objectFit="cover"
            src={process.env.PUBLIC_URL + "/images/" + project.thumbnail}
            alt={project.thumbnail}
            controls
            autoPlay
            loop
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