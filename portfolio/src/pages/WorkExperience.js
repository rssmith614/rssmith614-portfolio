import { Container, Typography } from "@mui/material";
import WorkExpGrid from "../components/WorkExpGrid";

function WorkExperience() {
  return (
    <Container sx={{ bgcolor: "background.default", p: 2 }} >
      <Typography variant="h3" p={2}>
        Work Experience
      </Typography>
      <WorkExpGrid />
    </Container>
  );
}

export default WorkExperience;