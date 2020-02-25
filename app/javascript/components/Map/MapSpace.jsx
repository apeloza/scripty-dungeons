import React from 'react';
import SpawnPoint from './SpawnPoint';

class MapSpace extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    let spawn = this.props.mapSpaceData;
    if(this.props.mapIndex === this.props.playerPosition) spawn = {sceneType: 'player'}; //Check for player here and override default spawn if necessary
    return(
    <div onClick={() => this.props.handlePlayerMovement(this.props.mapSpaceData)} className={"map-space " + (this.props.type ? ("map-space_" + this.props.type) : "")}> 
      <SpawnPoint spawn={spawn} playerPosition={this.props.playerPosition} />
    </div>
    )
  }
}

export default MapSpace;