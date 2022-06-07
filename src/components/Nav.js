import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                    }} >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                        <Link to="/department">
                            <Button>Department</Button>
                        </Link>
                        <Link to="/pick">
                            <Button>Pick</Button>
                        </Link>
                        <Link to="/about">
                            <Button>About</Button>
                        </Link>
                    </ButtonGroup>
                </Box>
                </nav>
            </header>
        </div>
    )
}

export default Nav