import React from 'react';
import MapSpaces from './MapSpaces';

class MapScene extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div id="MapScene">
      <MapSpaces playerPosition={this.props.playerPosition} handlePlayerMovement={this.props.handlePlayerMovement} currentMap={this.props.currentMap} />
    </div>
    )
  }
}

export default MapScene;