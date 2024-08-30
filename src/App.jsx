import React from "react";
import "./App.scss"; // Import the CSS file for additional styles
import Typography from "./components/Typography";

function App() {
  return (
    <div className="welcome-container">
      <div className="overlay">
        <div className="content">
          <Typography
            textAlign="center"
            fontWeight="bold"
            fontSize="30px"
            color="#fff"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
          >
            Welcome to Template
          </Typography>
          <Typography
            textAlign="center"
            fontSize="14px"
            color="#fff"
            margin="20px 0"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
          >
            Your journey starts here. Explore and enjoy!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
