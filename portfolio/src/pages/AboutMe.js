import Card from '@mui/material/Card';
import { Container, CardHeader, Typography, CardContent, Grid, Button, Paper } from "@mui/material";

import axios from "axios";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const onDownload = () => {
  axios({
    url: '/api/resume/latest',
    method: 'GET',
    responseType: 'blob',
  }).then((res) => {
    const href = URL.createObjectURL(res.data);
    
    const link = document.createElement("a");
    link.download = `Robert_Smith_Resume.pdf`;
    link.href = href;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  });
};

function AboutMe() {
  return (
    <Container sx={{ bgcolor: "background.default", p: 2}}>
      <Paper
        variant='title'
      >
        <Typography variant='h3' p={2}>
          Robert Smith
        </Typography>
      </Paper>

      <Grid container spacing={4} py={4} >
        <Grid item>
          <Card elevation={ 5 }>
            <CardHeader
              title="Who am I?" />
            <CardContent>
              <Typography variant="body1" paragraph>
                Hello! Glad you could make it. I am Robert Smith, a dedicated and accomplished Computer Science and Engineering graduate from the University of California, Merced. With a GPA of 3.93, I have a strong academic foundation and a passion for developing innovative software solutions to various problems. Proficient in languages such as C++, Python, Java, and SQL, I possess a versatile skill set that enables me to tackle complex programming challenges.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout my academic journey, I have completed coursework in various areas, including database systems, distributed systems, and human-computer interaction. These studies equipped me with a solid unerstanding of various aspects of software engineering, and have helped me develop leadership and communication skills in team-based projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card elevation={ 5 }>
            <CardHeader
              title="Recognition and Accomplishments" />
            <CardContent>
              <Typography variant="body1" paragraph>
                During my tenure as a Student Technology Consultant with the UC Merced Office of Information Technology, I was particularly recognized for my awareness, communication skills, and excellent troubleshooting skills, and I was recommended for leadership positions.
              </Typography>
              <Typography variant="body1" paragraph>
                In my graduating semester, I was nominated for Outstanding Graduating Student in the School of Engineering for my noteworthy commitment and dedication to academic excellence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card elevation={ 5 }>
            <CardHeader
              title="What now?" />
            <CardContent>
              <Typography variant="body1" paragraph>
                I invite you to explore my various projects in detail and see my professional experience showcased in this portfolio, so that you can witness the breadth of my skills and experience, the depth of my technical expertise, and my passion for innovation and software development.
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to continue exploring via:
              </Typography>
              <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} >
                <Grid item>
                  <Button variant="contained" href={"https://github.com/rssmith614"} startIcon={<GitHubIcon />}>
                    GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button  variant="contained" href={"https://linkedin.com/in/rssmith614"} startIcon={<LinkedInIcon />}>
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button  variant="contained" onClick={onDownload} startIcon={<FileDownloadIcon />}>
                    Resume
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;