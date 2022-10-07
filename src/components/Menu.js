import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

const Menu=({header, active, setActive})=>{
    return (
    <div className={active? "menu active": "menu"} onClick={() => setActive(false)}>
           
       <div className="menu__content">
        <div className="menu__header mt-20">{header}</div>
       <ul >
        
            <li>
            <Link to="/" target="_blank">
         <p>Home</p>
        </Link>  
            </li>
            <li>
            <Link to="/projects" target="_blank">
        <p>Projects</p>
        </Link>
        </li>
            <li>
            <Link to="/contact" target="_blank">
            <button className='header__right_button'>Contact</button>
           
          </Link> 
            </li>
            </ul>
       </div>
           </div>
      
    
      
        
    
    );
};

export default Menu;