import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


export default function Projects() {
  return (
    <Stack direction="row" spacing={10} style = {{ paddingLeft:"17%", marginTop:"20vh",height:"60vh", paddingTop:"20px"}}>
      <Card sx={{ maxWidth: 380, maxHeight: 400}}>
        <CardMedia
          component="img"
          height="140"
          image={require('../uicomponents/images/python.png')} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Project capable of CRUD Operations built using ReactJs, SpringBoot, PostgressSQL hosted on AWS.
          </Typography>
        </CardContent>
        <br/>
        <br/>
        <br/>
        <CardActions>
          <Button size="small">View Source Code</Button>
          <Button size="small">View Live</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 380, maxHeight: 400}}>
        <CardMedia
          component="img"
          height="140"
          image={require('../uicomponents/images/python.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Working on a project using Cassandra, SpringBoot, ReactJs,........
          </Typography>
        </CardContent>
        <br/>
        <br/>
        <br/>
        <CardActions>
          <Button size="small">View Source Code</Button>
          <Button size="small">View Live</Button>
        </CardActions>
      </Card>
    
     
    </Stack>
  );
}
