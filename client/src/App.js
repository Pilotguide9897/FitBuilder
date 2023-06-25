// import statements
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// todo: import the necessary components.




import LoginSignupModal from "./components/login_signup_modal";
import Dashboard from "./pages/Dashboard";
import FitBuildLandingPage from "./pages/landingPage/LandingPage";
import SimpleNavbar from "./components/navbar/Navbar";


import Login from './components/Login';
import Signup from './components/Signup';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
      <SimpleNavbar></SimpleNavbar>
        <Routes>
      <Route
      path="/dashboard"
      element= {<Dashboard />}
      />
      <Route path="/" element={<FitBuildLandingPage />} />
      <Route
      path="/signup"
      // element= {<SignUp />}
      />
      <Route
      path="/login"
      // element= {<Login />}
      />
      <Route
      path="/user/:userId"
      // element= {<UserProfile />}
      />
      <Route
      path="/startworkout/:workoutId"
      // element = {<StartWorkout />}
      />
      <Route
      path="/viewworkout/:workoutId"
      // element = {<ViewWorkout />}
      />
      <Route
      path="/programs"
      // element = {<ViewPrograms />}
      />
       <Route
      path="/programs/:programId"
      // element = {<ViewSingleProgram />}
      />
       <Route
      path="/createprogram"
      // element = {<CreateProgram />}
      />
      <Route
      path="/modifyprogram"
      // element = {<ModifyProgram />}
      />
      <Route
      path="/createworkout"
      // element = {<CreateWorkout />}
      />
       <Route
      path="/addexercise"
      // element = {<AddExercise />}
      />
      </Routes>
      
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;