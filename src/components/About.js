import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const About = () => {
  return (
    <Container id="projects">
        <p>Img placeholder</p>
        <div>
            <h1>Hey there! I'm Vikram</h1>
            <p>I'm a full-stack developer who loves code and ux and stuff</p>
        </div>
        <h2>I'm open to work!</h2>
        <p>Need a well-rounded engineer for your team? Have a look at my resume and get in touch.</p>
        <Button variant="contained">Resume</Button>
    </Container>
  )
}
