import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { Home, Profile, Login, Register } from "./pages";
import Verified from "./pages/Verified";
import { peristor, store } from "./redux/store";
import { darkTheme, lightTheme } from "./theme";

function App() {


  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className="App">
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Provider store={store}>
            <Routes>
              <Route
                path="/"
                element={
                  user ? <Home lightMode={lightMode} setLightMode={setLightMode}/> : <Navigate to='login'/>  
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login /> } />
              <Route
                path="/profile/:id"
                element={user ?
                  <Profile lightMode={lightMode} setLightMode={setLightMode}/> : <Navigate to='login'/> 
                }
              />
              <Route path="/users/:userId/verify/:token" element={<Verified/>}/>
            </Routes>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
