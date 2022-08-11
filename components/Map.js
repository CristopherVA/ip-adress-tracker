import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature, ScaleControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// function MapGlobal() {
//   const MapContainer = ReactMapboxGl({
//     accessToken: process.env.mapbox_key,
//   });
//   return (

//     <div id='map' className='flex-1'>
//       <MapContainer
//         style='mapbox://styles/mapbox/satellite-streets-v11'
//         containerStyle={{
//           height: '100vh',
//           width: '100vw   ',
//         }}
//       >
//         <Layer   type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
//           <Feature   coordinates={[18.735693, -70.162651]} />
          
//         </Layer>
        
//       </MapContainer>
//     </div >

//   )
// }

// export default MapGlobal



mapboxgl.accessToken = process.env.mapbox_key

function Map() {
  

  useEffect(() => {
    const map = new  mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      zoom: 1.5,
      center: [30, 50],
      projection: 'globe'
    });
    
    map.on('load', () => {
      // Set the default atmosphere style
      map.setFog({});
    });
  }, [])
  


  return (
    <div id='map' className='flex-1'></div >
  )
}

export default Map
