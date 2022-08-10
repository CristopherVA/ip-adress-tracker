import React from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const MapContainer = ReactMapboxGl({
    accessToken: process.env.mapbox_key,
  });
  return (

    <div className='flex-1'>
      <MapContainer
        style='mapbox://styles/mapbox/satellite-streets-v11'
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={[5]}
        
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[18.735693, -70.162651]} />
        </Layer>
      </MapContainer>
    </div >

  )
}

export default Map
