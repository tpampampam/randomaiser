import { Box,  Typography } from "@mui/material";
import { FC } from "react";
import Team from "./Team";
import { useTeamContext } from "../context/teamsContext";
import { IUser } from "../pages/User";

export interface ITeam {
    id: number
    team: string
    logo: string
    large?: boolean
    myTeamFunction?: ({id, team, logo}: any) => void
}

interface LeagueProps extends IUser {
    name: string
    teams: ITeam[]
    
}


const League: FC<LeagueProps> = ({name, teams, user}) => {
    const {addToMyTeams} = useTeamContext()
    return (
        <>
            <Typography component="h3" sx={{fontSize: '14px', fontWeight: 'bold'}}>{name}</Typography>
            <Box 
                sx={{
                    borderRadius: 1,
                    bgcolor: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    margin: '0 auto',
                    marginBottom: '20px'
                }}
            >    
                    {teams.map((item: ITeam) => (
                        <Team key={item.id} {...item} user={user} large={false} myTeamFunction={addToMyTeams}/>
                    ))}              
            </Box>
        </>
    )
}

export default League;