import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  return <WelcomeScreen time={props.gameTime} errorCount={props.errorCount} />;
};


App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
