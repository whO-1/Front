'use client'
import React, {useRef} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Spinner from '@/components/loaders/Spinner';


const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMapComponent = ({lat, long}) => {
  
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const center = useRef({
    lat: 47.02,
    lng: 28.83
  });

  if(lat&&long){
    center.current.lat = lat;
    center.current.lng = long;
  }

  return (
    <>
      <LoadScript 
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={() => setMapLoaded(true)}
        onError={(error) => console.error('Error loading Google Maps', error)}
      >
        {!mapLoaded && <Spinner />} 
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center.current} 
          zoom={14}
        >
        {
            ( lat !== null && long !== null)?
              <Marker position={center.current}/>
            :
            ""
        }
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default GoogleMapComponent;
