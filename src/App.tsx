

import Header from './components/Header';
import { TeamContextProvider } from './context/teamsContext';

import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import First from './pages/First';

function App() {
  
  return (
    <TeamContextProvider>
      <Header/>
        <Routes>
        <Route path='/' element={<First/>}/>
          <Route path='/user1' element={<User user='user1'/>}/>
          <Route path='/user2' element={<User user='user2'/>}/>
        </Routes>
    </TeamContextProvider>
  );
}

export default App;

