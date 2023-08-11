'use client'
import React from 'react';
import './map.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Helmet} from 'react-helmet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';

function Map() {
  

  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
    </Helmet>
 

    <MapContainer  center={[41.075105, -111.974193]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[41.075105, -111.974193]}>
    </Marker>
  </MapContainer>

      
    </>
  );
}

export default Map;
