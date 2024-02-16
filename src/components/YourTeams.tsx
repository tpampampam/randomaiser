import { Button, Paper, Typography } from "@mui/material";
import Team from "./Team";
import style from './index.module.css'
import { useTeamContext } from "../context/teamsContext";
import { FC } from "react";
import { IUser } from "../pages/User";
import { ITeam } from "./League";


const YourTeams: FC<IUser> = ({user}) => {

    const {user1Teams, user2Teams, removeFromMyTeam, finalLineup} = useTeamContext()

    const myTeams = (user === 'user1') ? user1Teams : user2Teams
    return(
        <>
            <Typography
                variant="h5"
            >
                Мои команды:
            </Typography>
            <Paper 
                elevation={3}
                className={style.myTeams}
                sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                alignContent: 'flex-start',
                flexWrap: 'wrap',
                margin: '2px',
                minHeight: 300,
                width: 300,
                padding: '5px',
                lineHeight: '60px',
                backgroundColor: 'white'
                }}
            >
                {myTeams && myTeams.map((item: ITeam )=> (
                    <Team key={item.id} {...item} large={true} user={user} myTeamFunction={removeFromMyTeam}/>
                ))}
            </Paper>
            <Button 
                variant="outlined"
                color="success"
                sx={{mt: '20px'}}
                onClick={() => finalLineup(user)}
            >
                Добавить команды
            </Button>
        </>
    )
}

export default YourTeams;