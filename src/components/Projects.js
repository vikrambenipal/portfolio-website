import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    img { 
        border-radius: 30px;
        width: 90%;
    }
    .card {
        border: 2px solid purple;
    }
`
export const Projects = ({ data }) => {
  return (
    <Container>
        <div>
            {data.map((project,i) => {
                return (
                    <Card className="card" key={i}>
                        <h3>{project.title}</h3>
                        <img alt="" src={project.image}/>
                        <p>{project.description}</p>
                        <Button href={project.github} target="_blank" variant="contained" startIcon={<GitHubIcon/>}>Github</Button>
                        <Button href={project.website} target="_blank" variant="contained" startIcon={<WebIcon/>}>View Project</Button>
                    </Card>
                )
            })}
        </div>
    </Container>
  )
}
