import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./views/AuthPage";
import ProfilePage from "./views/ProfilePage";
import Globalstyle from "./styles/global";
import { Container } from "./styles";

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
