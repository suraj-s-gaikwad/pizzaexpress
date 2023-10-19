import React from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Link } from 'react-router-dom'
import './Style.css'
import ListIcon from '@mui/icons-material/List';



export default function Header() {
  return (
    <div>
        <Box className="header">
       <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
            <IconButton>
                <ListIcon color="inherit" aria-aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"}}}/>
                </IconButton>
        <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}}>
            <LocalPizzaIcon />
             Pizza Express</Typography>
          <Box sx={{display:{xs:"none",sm:"block"},}}>
        <ul className="navgation">
   
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
           


          </Box>
       


        </Toolbar>
       </AppBar>

        </Box>
        <h1>welcome to css</h1>
    </div>
  )
}
