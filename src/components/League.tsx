import { Box,  Typography } from "@mui/material";
import { FC,  useCallback } from "react";
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

    const addTeam = useCallback(({id, team , logo, user}:ITeam & IUser) => addToMyTeams({id, team , logo, user}),[])
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
                        <Team key={item.id} {...item} user={user} large={false} myTeamFunction={addTeam}/>
                    ))}              
            </Box>
        </>
    )
}

export default League;