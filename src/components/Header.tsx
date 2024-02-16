import { AppBar, Button, ButtonGroup, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from './index.module.css';
import { Link } from "react-router-dom";


const Header = () => {


    return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{position: 'relative'}}>
                <Link 
                    className={style.linkStyle}
                    style={{position: 'absolute'}}
                    to='/'>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            padding: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 400,
                            letterSpacing: '.2rem',
                            color: 'rgb(17, 69, 214)',
                            textDecoration: 'none',
                            backgroundColor: '#fff'
                        }}
                    >
                        Football
                    </Typography>
                </Link>
                <ButtonGroup variant="text" aria-label="Basic button group"
                    sx={{backgroundColor: 'white', margin: '0 auto'}}
                >
                    <Button >
                        <NavLink 
                            className={style.linkStyle}
                            end 
                            style={
                                ({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})
                            } 
                            to='/user1'
                        >
                            Чемпион
                        </NavLink> 
                    </Button>
                    <Button>
                        <NavLink 
                            className={style.linkStyle}
                            end 
                            style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                            to='/user2'
                        >
                            Победитель
                        </NavLink> 
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default Header;





