import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Nav extends PureComponent {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            <Typography variant="h5">NEOSOFT</Typography>
          </Typography>
          <Typography>
            <Link to="/pagination" style={{ color: "white" }}>
              Pagination
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
