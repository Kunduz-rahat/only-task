import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './views/AuthPage';
import ProfilePage from './views/ProfilePage';

interface AppProps {
  
}
 
const App:React.FC<AppProps> = (props) => {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
 
export default App;