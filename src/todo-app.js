import React from 'react'
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function ToDoApp () {
  return (
    <Paper
      elevation={0}
      style={{padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#fafafa',
    }}>
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default ToDoApp
