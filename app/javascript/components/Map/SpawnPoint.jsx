import React from 'react';

class SpawnPoint extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let spawn = null;
    
    //due to scoping this isn't a switch-case
    if(this.props.spawn.sceneType === 'enemy') spawn = 'E';
    if(this.props.spawn.sceneType === 'treasure') spawn = 'T';
    if(this.props.spawn.sceneType === 'player') spawn = 'P';

    return(
    <div className="spawn-point">
      {spawn}
    </div>
    )
  }
}

export default SpawnPoint;