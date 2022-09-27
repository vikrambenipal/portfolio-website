import React from 'react';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid red;
    padding: 20px;
    p {
        margin: 0px;
    }
    .menu {
        cursor: pointer;
    }
`

export const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleThing = () => {
        console.log("thing")
    }

  return (
    <Container>
        <p>Vikram Benipal</p>
        <MenuIcon className="menu" 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        />

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem onClick={handleThing}>About</MenuItem>
        <MenuItem onClick={handleClose}>Work Experience</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Resume</MenuItem>
        </Menu>
    </Container>
  )
}
