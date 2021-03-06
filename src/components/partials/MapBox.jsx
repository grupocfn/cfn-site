import { useRef, useEffect, } from 'react';
import mapboxgl, {Marker} from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapBox.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaW5mb3JtYXRpY2FjZm4iLCJhIjoiY2t5dWNjNGV0MW05NDJ1bnVsNXI3dHR3NCJ9.HqoargzPCIGUSCYMA8vFdA';

function MapBox(props) {
  const mapContainerRef = useRef(null);

  const lat = props.latitude;
  const lng = props.longitude;
  const zoom = props.zoom;

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default MapBox;