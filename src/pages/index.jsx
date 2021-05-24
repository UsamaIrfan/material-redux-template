import React from "react";
import AppBar from "../comps/Navbar";
import { Typography } from "@material-ui/core"

function Home() {

  return (
    <>
      <div className="App">
        <AppBar />
      </div>
      <div style={{ display: "flex", height: "500px", alignItems: "center", justifyContent: "center", width: "100%", }}>
        <Typography variant="h4" color="primary">Computerize</Typography>
      </div>
    </>
  );
}

export default Home;
