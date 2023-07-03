import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


//Side Effects anything else
//Store date in Browser storage, send http request to backend servers
//set and manage timers ...
//THESE TASKS must happen outside of the normal component evaluation and render cycle - 
//especially since they might block/delay rendering

//Side effects in this function, should not be taken without useEffect hook
//because could cause a loop effect on it, everytime it tries to render by the changed of a state


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{

    //localStorage global object to save information at the browser
    const storedUser = localStorage.getItem('isLoggedIn');
    if(storedUser){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','0');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
