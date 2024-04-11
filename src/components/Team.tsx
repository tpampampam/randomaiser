import { Paper } from "@mui/material";
import style from './index.module.css';
import { FC, memo } from "react";
import { ITeam } from "./League";
import { IUser } from "../pages/User";


const Team:FC<ITeam & IUser> = memo(({id, team, logo, large, myTeamFunction, user }) => {
    
    return(
        <Paper 
            className={style.team}
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '2px',
            height:  large ? 50 : 30 ,
            width: large ? 50 : 30 ,
            padding: '1px',
            lineHeight: '60px',
            }}>
            <img src={logo} alt={team} className={style.logo}
            onClick={() => myTeamFunction!({id, team , logo, user})}
            />
        </Paper>
    )
})

export default Team;