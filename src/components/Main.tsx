import { Box } from '@mui/material';
import teams from '../utils/data.json';
import League from './League';
import { FC } from 'react';
import { IUser } from '../pages/User';

const Main: FC<IUser> = ({user}) => {
   

    return(

        <Box 
            sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: 'white',
                display: 'flex',
                justifyContent: 'start',
                flexWrap: 'wrap',
                width: '64%',
                margin: '0 auto'
            }}
        >
            <League name='APL' teams={teams.APL} user={user}/>
            <League name='La Liga' teams={teams.laliga} user={user}/>
            <League name='Seria A' teams={teams.seriaA} user={user}/> 
            <League name='Bundesliga' teams={teams.bundesliga} user={user}/>
        </Box>

    )
}

export default Main;