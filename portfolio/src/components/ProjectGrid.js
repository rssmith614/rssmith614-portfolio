import React, { useEffect, useState } from "react";

import axios from "axios";

import { CircularProgress, Grid } from '@mui/material';

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
      axios.get(url)
      .then((res) => {
        setLoading(false);
        setProjects(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
      // const response = await fetch(url);

      // if (!response.ok) {
      //   setLoading(false);
      //   const message = `An error occurred: ${response.statusText}`;
      //   window.alert(message);
      //   return;
      // }

      // const projects = await response.json();
      // setProjects(projects);
      // // onSelected(projects[0])
      // setLoading(false);
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
    <Grid container spacing={8} justifyContent={"center"} alignItems={"center"} >
        { projectList() }
    </Grid>
  );
}