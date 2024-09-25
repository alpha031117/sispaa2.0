import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
    useEffect(() => {
        // Prevent reinstantiation of map
        if (document.getElementById('map')?.innerHTML !== '') return;

        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Set the correct paths for the marker icons
        const defaultIcon = L.icon({
            iconUrl: markerIcon.src,
            shadowUrl: markerShadow.src,
        });


        // Initialize the marker
        const marker = L.marker([51.5, -0.09], { icon: defaultIcon }).addTo(map)
            .bindPopup('Test Marker');

        // Add click event listener to the map
        map.on('click', function (e) {
            const { lat, lng } = e.latlng;
            marker.setLatLng([lat, lng])
                .bindPopup(`Marker moved to: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
                .openPopup();
        });


        return () => {
            map.remove();
        }
    }, []);


    return (
        <div>
            <div id='map' style={{ height: '500px', width: '100%' }}></div>
        </div>
    )
}
export default MapComponent;