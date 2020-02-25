import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import MapScene from './Map/MapScene';
import EnemyScene from './Enemy/EnemyScene';

class GameScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = { 
      currentScene: { 
                      sceneType: null, //null scene = map view
                      mapIndex: 0
                    }, 
      playerPosition: 0,
      currentMap: this.generateMap(this.rollRandomNumber(2, 4))
    };

    this.determineScene = this.determineScene.bind(this);
    this.generateMap = this.generateMap.bind(this);
    this.handlePlayerMovement = this.handlePlayerMovement.bind(this);
    this.removeSpawn = this.removeSpawn.bind(this);
    this.rollSpawn = this.rollSpawn.bind(this);
    this.rollRandomNumber = this.rollRandomNumber.bind(this);
    this.swapScenes = this.swapScenes.bind(this);
  }

  generateMap(numberOfSpaces){
    let mapArray = new Array(numberOfSpaces).fill(undefined); //undefined is required for the map to work below as it won't work on array cells with no value at all
    const mappedMap = mapArray.map((mapSpace, mapIndex) => this.rollSpawn(mapIndex)); // yes, mappedMap. This will be the final product sent over to MapSpaces
    
    //we add one space to the beginning that is empty because it will always have the player in it
    mappedMap.unshift({sceneType: null, mapIndex: 0});
    return mappedMap;
  }

  rollSpawn(index){
    let spawnRoll = this.rollRandomNumber(0, 2); 
    switch(spawnRoll){
      case 0:
        return {
          sceneType: null,
          mapIndex: index + 1 // +1 because of starting space that is inserted after
        };
      case 1:
        return {
          sceneType: 'enemy',
          name: 'A Test Enemy!',
          mapIndex: index + 1
        }
      case 2:
        return {
          sceneType: 'treasure',
          contents: "You found an item! Too bad it doesn't do anything yet ... :(",
          mapIndex: index + 1
        }
    }
  }
  
  rollRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  removeSpawn(mapSpaceIndex){
    let currentMapCopy = this.state.currentMap.slice();
    currentMapCopy[mapSpaceIndex].sceneType = null; //set space to empty in map array
    this.setState({currentMap: currentMapCopy});
  }

  //examine if player movement is possible
  handlePlayerMovement(mapSpaceData){
    if(this.state.playerPosition - 1 === mapSpaceData.mapIndex || this.state.playerPosition + 1 === mapSpaceData.mapIndex){
      this.setState({playerPosition: mapSpaceData.mapIndex}); // move the player to empty space
      this.setState({currentScene: {sceneType: mapSpaceData.sceneType, mapIndex: mapSpaceData.mapIndex}}) // this is a catch-all to make sure we are looking at the map
    }
   
  }

  //just swap scenes without moving.
  swapScenes(sceneData){
    this.setState({currentScene: sceneData});
  }

  determineScene(currentScene){
    //define mapscene here as we use it multiple times
    let mapScene = <MapScene 
    currentMap={this.state.currentMap}
    playerPosition={this.state.playerPosition}
    handlePlayerMovement={this.handlePlayerMovement} />

    if(currentScene.sceneType === null){ //if no active scene is loaded, we display the default map screen
      return mapScene;
    } else {
      switch(currentScene.sceneType) { // this switch-case is likely to get bigger over time as I still need to implement treasure and maybe inventory here
        case 'enemy':
          return <EnemyScene 
          removeSpawn={this.removeSpawn} 
          currentScene={currentScene}
          swapScenes={this.swapScenes}
          handlePlayerMovement={this.handlePlayerMovement} />
        default: // just in case! Might replace with an 'error screen' or something of that nature, with a prompt to return to title
          return mapScene;
      }
    }
  }

  render(){
    let currentScene = this.determineScene(this.state.currentScene);
    return(
    <div id="GameScreen">
      <div id="SceneContainer">
      {currentScene}
      </div>
      <MenuBar/>
    </div>
    )
  }
}

export default GameScreen;