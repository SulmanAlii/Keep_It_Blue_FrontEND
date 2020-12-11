import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Mapa from '../Mapa';
/* import './Navbar.css'; */
import logo from './logo.png';
import Contacto from './Contacto';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
            <BrowserRouter>
                <nav className="NavbarItems">

                    <h1 className="navbar-logo">
                        <img className="logoForma" src={logo} alt='' width='160px'></img>
                        <i className=""></i> </h1>

                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
                        <br/>
                <Switch>
                    <Route exact path="/" render={() => <Mapa />} />
                    <Route path="/Contacta" render={() => <Contacto />} />
                    {/* <Route path="/Proyecto" render={() => <Proyecto />} /> */}
                    {/* <Route path="/Nosotros" render={() => <Nosotros />} /> */}
                    {/* <Route path="/Totem" render={() => <Totem />} /> */}
                    {/* <Route path="/SignUp" render={() => <SignUp />} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Navbar