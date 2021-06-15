import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Hpopup from './components/Hpopup';
import InfoWindow from './components/InfoWindow'
import ReactDOM from 'react-dom';
import './index.css'
import { Marker } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2hpdGUtc3RhcGxlciIsImEiOiJja3BkbW9wNXAwamt4Mndyb3RiNWR0eXNsIn0.-DIahe9hDeqXv1bF5I5Sxg';

const Map = () => {
    const mapContainerRef = useRef(null);
    const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15, closeButton:false}));
    const infoWindowRef = useRef(new mapboxgl.Popup())
    const [lng, setLng] = useState("fly");
    const [den, setDen] = useState('fly1');
    const [yearsRun, setYearsRun] = useState('fly2');

  
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/white-stapler/ckpdmrwxo1xvr17ql2lllb433',
        center: [-60.38, 50.65],
        zoom: 3.5
      });

    //   map.on('click', () => {
    //       var features = map.queryRenderedFeatures(e.point, {
    //           layers: ['School']
    //       });
    //       if (!features.length) {
    //           return;
    //       }
    //       var feature = features[0];
    //   })
  
      // change cursor to pointer when user hovers over a clickable feature
      // map.on('mouseenter', e => {
      //   if (e.features.length) {
      //     map.getCanvas().style.cursor = 'pointer';
      //   }
      // });
  
      // // reset cursor to default when user is no longer hovering over a clickable feature
      // map.on('mouseleave', () => {
      //   map.getCanvas().style.cursor = '';
      // });
  
      // add tooltip when users mouse move over a point

      map.on('mousemove', e => {
        const features = map.queryRenderedFeatures(e.point, {layers: ['School']});
        if (features.length) {
          const feature = features[0];
  
          // Create tooltip node
          const tooltipNode = document.createElement('div');
          ReactDOM.render(<Hpopup feature={feature} />, tooltipNode);
          tooltipNode.className = 'popupBack';

          // Set tooltip on map
          tooltipRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(tooltipNode)
            .addTo(map);
        }
      });

      // map.on('move', () => {
      //   setLng(map.getCenter().lng.toFixed(4));
      // });




      map.on('click', e => {
        const features = map.queryRenderedFeatures(e.point, {layers: ['School']});
        if (features.length) {
          const feature = features[0];
          setLng(feature.properties.School_Name);



        }
      })
  
      // Clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div>
        {/* <div className='sidebarStyle'>
          Longitude: {lng}
        </div> */}
        <div className= 'sidebar'>
        <InfoWindow
          schoolName={lng}
          //schoolDen={den}
          />
        </div>
        <div className='map-container' ref={mapContainerRef} />
      </div>
    );
  };
  
  export default Map;