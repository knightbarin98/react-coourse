import React, { Fragment, useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

//You can not return more tha one root JSX element
//You can not also store more than one root JSX element in a variable

//That one element that you will return can have more children, but it will
//be just one element that will return, does not matter the number of children
//inside the element, despite they are all inside it.

//One solution to this is to use a div as a wraper

//In bigger apps, you can easily end up with tons of unnecessary divs, those that are use as wrapers, 
//which add no semantic meaning or structure to the page but are only there because of Reactś/JSX requirement

//COULD BREAK YOUR STYLINGS, OR MAKE RENDERING SLOWER AND THE APP SLOWER

// <> </> <React.Fragment></React.Fragment> Empty wrapper component; it does not render any real HTML
//element to the DOM. But it fulfills React's/JSX requirement

//React fragments help us to write cleaner code, react portals also help us in a similar way

//To understand Portals we need to understand in which cases are useful and why should be use like that
//Modals should not be render with the rest of the DOM

//Semantically and from a "clean HTML structure" perspective, having a modal nested is not ideal.
//It is an overlay to the entire page after all (that's similar for side-drawers, other dialogs, etc)

//Refs
//Refs allows to get access to DOM elements and work with them
//Example AddUser.js


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // <>
    // <React.Fragment>
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>  
    // </>
    // </React.Fragment>
  );
}

export default App;
