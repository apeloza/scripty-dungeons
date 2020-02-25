import React from 'react';
import GameButton from '../helpers/GameButton';

class EnemyScene extends React.Component{
  constructor(props){
    super(props);

    this.processVictory = this.processVictory.bind(this);
  }

  processVictory(){
    //I will inevitably need to do some calculations here so I'm pre-emptively wrapping the parent method call
    this.props.removeSpawn(this.props.currentScene.mapIndex); //remove enemy from map as they are now defeated
    this.props.swapScenes({sceneType: null, mapIndex: this.props.currentScene.mapIndex}); //forcibly send null as we know there is no more scene here -- the enemy has been defeated
  } 

  render(){
    return(
    <div id="EnemyScene">
      FIGHTING
      <GameButton text="WIN! GET ME OUTTA HERE" buttonType="success" onClick={this.processVictory}/>
    </div>
    )
  }
}

export default EnemyScene;