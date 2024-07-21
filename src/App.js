import React from "react";
import "./App.css";
// import UseReducer from "./reducer";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Logged in user : ", user);
  return (
    <div className="App">
      {/* <h1 className="App-heading">useReducer</h1>
      <UseReducer /> */}
      <header className="App-header">
        {isAuthenticated ? <h1>Hello {user.name}</h1> : <h1>Hello, </h1>}

        {isAuthenticated ? (
          <button onClick={(e) => logout()}>Log Out</button>
        ) : (
          <button
            onClick={(e) => {
              loginWithRedirect();
            }}
          >
            Login with redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
