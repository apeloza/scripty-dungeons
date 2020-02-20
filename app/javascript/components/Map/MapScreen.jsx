import React from 'react';
import MapSpace from './MapSpace';

class MapScreen extends React.Component{
  render(){
    return(
    <div id="MapScreen">
      <MapSpace/>
      <MapSpace/>
    </div>
    )
  }
}

export default MapScreen;