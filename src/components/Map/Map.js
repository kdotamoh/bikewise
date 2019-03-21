import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_TOKEN}`

class Map extends Component {
  coords = this.props.location.features[0].geometry.coordinates
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.coords,
      zoom: 14
    });

    this.map.on('load', () => {
      this.map.addSource("location", {
        "type": "geojson",
        "data": this.props.location
      })
      this.map.addLayer({
        "id": "point",
        "type": "circle",
        "source": "location",
        'paint': {
          'circle-radius': 25,
          'circle-color': "#250066",
          'circle-opacity': 0.5
        }
      })
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }
  render() {
    const style = {
      width: '100%',
      minHeight: '50vh'
    }
    return (
      <div style={style} ref={el => this.mapContainer = el} />
        
    );
  }
}

export default Map;