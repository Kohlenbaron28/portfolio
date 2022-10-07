import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import Menu from "../components/Menu";
import React from "react";

function Home( ) {

    const [openedMenu, setOpenedMenu] = React.useState (false);
     const  openMenu=()=>{
        setOpenedMenu(!openedMenu);
     }
    return (
     
      <div>
     <Header></Header>
     <Main></Main>
      
      </div>
    );
  }
  
  export default Home;