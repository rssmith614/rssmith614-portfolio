import React, { useState } from "react";
import ProjectGrid from '../components/ProjectGrid';
import { Backdrop, Container, Slide, Typography, Paper } from '@mui/material';
import ProjectOverlay from "../components/ProjectOverlay";

function ProjectGallery() {
  const [currentOverlay, setCurrentOverlay] = useState();
  const [hasOverlay, setOverlayState] = useState(false);

  const handleOverlaySelection = (project) => {
    setOverlayState(true);
    setCurrentOverlay(project);
  };

  const handleOverlayClose = () => {
    setOverlayState(false);
  } 

  return (
    <Container sx={{ bgcolor: "background.default", p: 2}}>

      <Paper variant='title'>
        <Typography variant="h3" p={2}>
          Project Gallery
        </Typography>
      </Paper>

      <ProjectGrid 
        onSelected={handleOverlaySelection} />
      
      <Backdrop onClick={handleOverlayClose}
        open={hasOverlay} >
        <Slide direction="up" in={hasOverlay} >
          <div>
            <ProjectOverlay
              project={currentOverlay}
               />
          </div>
        </Slide>
      </Backdrop>

    </Container>
  );
}

export default ProjectGallery;