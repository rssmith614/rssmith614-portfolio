import React, { useEffect, useState } from "react";

import axios from "axios";

import { CircularProgress, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';

import ProjectTile from './ProjectTile';

let url = "/api/project"

export default function ProjectGrid( { onSelected } ) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSelection = (project) => {
    onSelected(project);
  };

  // This method fetches the project from the database.
  useEffect(() => {
    async function getProjects() {
      setLoading(true);
      axios.get(url
        // , {baseURL: 'http://localhost:4444'}
        )
      .then((res) => {
        setLoading(false);
        setProjects(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
    }

    getProjects();

    return;
  }, [projects.length]);

  function projectList() {
    return projects.map((project) => {
      if (project['visibility']) {
        return (
          <Grid item xs key={project._id}>
            <ProjectTile
              project={project}
              onSelected={handleSelection}
              key={project._id} />
          </Grid>
        );
      } else {
        return null;
      }
    });
  }

  if (loading) return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <CircularProgress />
    </div>
  )

  return (
    <Grid container spacing={8} justifyContent={"center"} alignItems={"center"} py={4}>
      <Grid item>
          <Card elevation={ 5 }>
            <CardHeader
              title="Portfolio Website"
              subheader="May 2023" />
            <CardContent>
              <Typography variant="body1" paragraph>
                That's right! This very website is one of my personal projects. Everything you see here was designed and built by myself using the MERN stack. The frontend is a React app with styling done with the help of MaterialUI, the backend is a Node.js app that uses Express to manage the request routes, and lastly, most of the data you see on this site is stored in a MongoDB cluster. The whole app is being served using Heroku.
              </Typography>
              <Typography variant="body1" paragraph>
                The idea behind making my portfolio a full-stack web app was to allow the data being showcased to grow naturally as I continue to gain experience and work on projects. I built a second app that I can use myself to manage the data stored in Mongo, that way I can modify what I showcase in my portfolio in real time without having to re-deploy or make manual tweaks. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        { projectList() }
    </Grid>
  );
}