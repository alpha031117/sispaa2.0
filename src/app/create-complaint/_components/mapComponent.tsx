'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const Map = dynamic(
    () => import('./map'), // Separate file for the map logic
    { 
      loading: () => <p>Loading map...</p>,
      ssr: false // This line is important. It disables server-side rendering for this component.
    }
  )

  return (
    <div>
      {isMounted && <Map />}
    </div>
  )
}

export default MapComponent
// 'use client';

// import React, { useRef } from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import the MapContainer and other components from react-leaflet
// const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

// const MapComponent = () => {
//     const currentLocation = useRef<[number, number]>([4.2, 101.9]);

//     return (
//         <MapContainer center={[4.2, 101.9]} zoom={13} style={{ height: '500px', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <Marker position={currentLocation.current} />
//         </MapContainer>
//     );
// };

// export default MapComponent;