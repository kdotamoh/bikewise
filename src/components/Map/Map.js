/** @jsx jsx */
import { Component } from 'react';
import mapboxgl from "mapbox-gl";
import { css, jsx } from "@emotion/core";

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
    const style = css`
      min-height: 50vh;
      width: 70%;

      @media (max-width: 780px) {
        width: 100%;
      }
    `
    return (
      <div css={style} ref={el => this.mapContainer = el} />
        
    );
  }
}

export default Map;