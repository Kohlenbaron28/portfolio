import React from 'react';
import {Route} from "react-router-dom";
import Menu from '../components/Menu';
import Contact from './Contact';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Projects from './Projects';
import Home from './Home';
import 'macro-css';

function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="wrapper">

<Route path="/" exact>
<Home></Home>

</Route>

<Route path="/projects" exact>
<Projects></Projects>
</Route>

<Route path="/contact" exact>
<Contact></Contact>
</Route>
    </div>
  );
}

export default App;
