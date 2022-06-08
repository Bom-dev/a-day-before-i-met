import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const sx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
    m: 1,
    },
}

const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                <Box sx={sx} >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Link to="/">
                            <Button><h3>Home</h3></Button>
                        </Link>
                        <Link to="/department">
                            <Button><h3>Department</h3></Button>
                        </Link>
                        <Link to="/pick">
                            <Button><h3>Pick</h3></Button>
                        </Link>
                        <Link to="/about">
                            <Button><h3>About</h3></Button>
                        </Link>
                    </ButtonGroup>
                </Box>
                </nav>
            </header>
        </div>
    )
}

export default Nav