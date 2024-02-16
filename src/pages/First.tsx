import { Box, Button, Container, Paper, Typography } from "@mui/material"
import style from '../components/index.module.css';
import { useTeamContext } from "../context/teamsContext";

const First = () => {
    const {randomTeams, gameTeam, formerTeams} = useTeamContext()
    console.log(gameTeam)
    return (
        <Container 
            sx={{ 
              mt: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)'
            }}
        >
            <Paper 
                elevation={3}
                className={style.myTeams}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    alignContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                    marginTop: '50px',
                    minHeight: 250,
                    width: 500,
                    padding: '5px',
                    lineHeight: '60px',
                    backgroundColor: 'white',
                    position: 'relative'
                }}
            >
                {gameTeam.length > 0 ? (gameTeam.map(item => (
                    <Box key={item.id} sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '150px',
                                            height: '150px',
                                            margin: '0 auto',
                                            
                                            }}>

                            <img src={item.logo} alt="" className={style.teamLogo}/>

                    </Box>
                ))) : 
                ( 
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%)'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1.5rem',
                                fontFamily: 'Raleway',
                                color: '#0201176f'
                            }}
                        >
                            Выберите команды
                        </Typography>
                    </Box>
                )}
            </Paper>        
            <Button 
                onClick={() => randomTeams()}
                variant="contained" 
                color="success"
                sx={{
                    width: '150px',
                    margin: '0 auto',
                    marginTop: '10px'    
                }}                         
            >
                Выбор команды
            </Button>
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 50px)',
                    rowGap: '5px'
                }}
            >
                {formerTeams && formerTeams.map(item => (
                    <img src={item.logo} style={{width: '30px', height: '35px'}}/> 
                    ))
                }
            </Box>
        </Container>
    )
}

export default First;


