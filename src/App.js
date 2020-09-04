import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tracks from "./Tracks/Tracks";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute";
import Title from "./utils/Title"
import NotFound from "./components/NotFound"

// TODO: CONFIGURE DRM & AUDIO PLAYER
// TODO: MAKE AUDIO PLAY ON MOBILE
// TODO: ADD GOOGLE ANALYTICS - ANALYTICS IS WACK SINCE THERE"S ONLY ONE USER

//WHEN USERS REFRESH THEY HAVE TO LOGIN AGAIN, idk how this affects mobile stuff
//, drm setup, content for terms&conditions, y on mobile
// app works on npm run start and firebase deploy but not firebase serve bc of some header sent error: Error [ERR_HTTP_HEADERS_SENT]: Cannot remove headers after they are sent to the client
//wrong password popups

const App = () => {
  return (
    <div>
    <Title></Title>
    <AuthProvider>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/tracks" component={Tracks} /> */}
          <PrivateRoute exact path="/beta" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </AuthProvider>
    </div>

  );
};

export default App;
