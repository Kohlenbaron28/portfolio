import './Header.css';
import Menu from '../Menu';
import { useState } from 'react';



function Header() {
    const [menuActive, setMenuActive] = useState (false);
    
    return (
     
       <div  className='header-border d-flex justify-between'>
          <nav>
            <div className={menuActive?"header_burger active":"header_burger"} onClick={() => setMenuActive(!menuActive)}>
                <span></span>
            </div>

            </nav>
             <Menu header={"Меню"} active = {menuActive} setActive = {setMenuActive}/>
            
          

       </div>
      
    );
  }
  
  export default Header;