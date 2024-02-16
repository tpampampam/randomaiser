import { Box, Container } from '@mui/material';
import Main from '../components/Main';
import YourTeams from '../components/YourTeams';
import { FC } from 'react';

export interface IUser {
    user: string
}

const User:FC<IUser> = ({user}) => {

    return(
        <>
            <Container 
            sx={{ 
              mt: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)'
            }}
          >
            <Box>
              <Main user={user}/>
            </Box>
            <Box
              sx={{
                borderRadius: 1,
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                margin: '0 auto',
            }}
            >
              <YourTeams user={user}/>
            </Box>
          </Container>
        </>

    )
}
export default User;