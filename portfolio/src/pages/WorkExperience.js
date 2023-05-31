import { Container, Typography, Paper } from "@mui/material";
import WorkExpGrid from "../components/WorkExpGrid";

function WorkExperience() {
  return (
    <Container sx={{ bgcolor: "background.default", p: 2 }} >
      <Paper variant='title'>
        <Typography variant="h3" p={2}>
          Work Experience
        </Typography>
      </Paper>

      <WorkExpGrid />
    </Container>
  );
}

export default WorkExperience;