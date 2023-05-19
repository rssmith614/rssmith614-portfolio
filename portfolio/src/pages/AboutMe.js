import Card from '@mui/material/Card';
import { Container, CardHeader, Typography, CardContent, Grid } from "@mui/material";

function AboutMe() {
  return (
    <Container >
      <Typography variant='h3' p={2}>
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item>
          <Card elevation={ 5 }>
            <CardHeader
              title="Who am I?" />
            <CardContent>
              <Typography variant="body1" paragraph>
                Hello! Glad you could make it. I am Robert Smith, a dedicated and accomplished Computer Science and Engineering graduate from the University of California, Merced. With a GPA of 3.92, I have a strong academic foundation and a passion for developing innovative software solutions to various problems. Proficient in languages such as C++, Python, Java, and SQL, I possess a versatile skill set that enables me to tackle complex programming challenges.
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
              title="Things of Note" />
            <CardContent>
              <Typography variant="body1" paragraph>
                During my tenure as a Student Technology Consultant with the UC Merced Office of Information Technology, I was particularly recognized for my awareness, communication skills, and excellent troubleshooting skills, and I was recommended for leadership positions.
              </Typography>
              <Typography variant="body1" paragraph>
                In my graduating semester, I was nominated for Outstanding Graduating Student in the School of Engineering, reflecting my commitment and dedication to academic excellence.
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;