import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import {  Typography} from '@mui/material' 
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <nav>
     <Typography id="logo" color={"goldenrod"} variant="h4" component="div" sx={{flexGrow:1}}>
             <LocalPizzaIcon style={{fontSize:"40px"}}/>
            
             Pizza Express</Typography>
     <input type="checkbox" id="check"/>
<label for="check">
<MenuIcon/>
</label>

          
 <ul>
  
            <li><Link to="/">Home</Link></li>
            <li><Link to="Menu">Menu</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Contact">Contact</Link></li>
        </ul>

    </nav>
  )
}
