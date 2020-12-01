import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";
import dataa from "./beach.json";
import Leaflet from "leaflet";
import {Button} from'reactstrap';
import icon from "leaflet/dist/images/marker-icon.png";
import img from './tree.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Contenido from './Contenido';
import Formulario from './components/Formulario'
import Mapa from "./components/Mapa";

let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;


function App() {

  const [beachName,setbeachName] = useState(null);

  // console.log(beachName);

  return (
    <div className="App" >
    
    <Mapa />
    
    {/*<h1>{beachName}</h1> */ }

    </div>
  );
}

export default App;
