import React, { useEffect, useState } from 'react';

import axios from "axios";

import { CircularProgress, Grid } from '@mui/material';

import WorkExpTile from "./WorkExpTile";

let url = "/api/workexp"

export default function WorkExpGrid() {
  const [workExps, setWorkExps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorkExps() {
      setLoading(true);
      axios.get(url
        // , {baseURL: 'http://localhost:4444'}
        )
      .then((res) => {
        setWorkExps(res.data);
        setLoading(false);
      })
      .catch((err) => {
        window.alert(err);
      });
    }

    getWorkExps();

    return;
  }, [workExps.length]);

  function workExpList() {
    return workExps.map((workExp) => {
      return (
        // remove xs for cards to take full width
        <Grid item key={workExp._id}>
          <WorkExpTile
            workExp={workExp}
            key={workExp._id} />
        </Grid>
      );
    });
  }

  if (loading) return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <CircularProgress />
    </div>
  )

  return (
    <Grid container spacing={4} justifyContent={"center"} alignItems={"center"} py={4} >
        { workExpList() }
    </Grid>
  );
}