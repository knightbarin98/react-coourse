import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './store/auth-context';

//import AuthContext from './store/auth-context';

/*
  useReducer for state management
  Sometimes, you have more complex state- for example if it got multiple
  states. multiple ways of changing it or dependencies to other states

  useState the often becomes hard or error-prone to use it is easy
  to write bad, inefficient or buggy code in susch scenarios

  useReducer can be used as a replacement for use state if you need more 
  powerful state management

  use reducer when you have a state that depends on another state, reducer help you to merging them
  into one state to be properly managed

  When do you use useState or useReducer ?
  Generally, you will know when you need useReducer( -> when using state 
    becomes cumbersome or you are geting a lot of bugs/unintended behaviors)

  useState great for independent pieces of state/data
  Great if state updates are easy and limited a few kinds of updates
  
  useReducer should be considered if you have related pieces of state/data
  Can be helpful if you have more complex state updates

  Context
  Allows us to pass a state through all the app, and avoid to lift it up the
  state through all the components in order to use it in specify component
  
                            APP
                             |
                             |
      ------------------------------------------------
      |                      |                       | 
    <AUTH/>               <SHOP/>                 <CART/> 
      |                      | 
    <LOGGEDIN/>           <PRODUCT/>            

    -Imagine you want to verify the session on cart, order to purchase
    -Passed multiple products to cart

    Too much render, low app, difficult to mantain

*/

function App() {

  const ctx = useContext(AuthContext);

  //Auth context in order to wrap every component that will have access to that component is necessary to
  //import the context and wrap the components just like Auth.Provider, Provider let us to share the context with everything wrap in there

  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout: logoutHandler}}> */}
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
