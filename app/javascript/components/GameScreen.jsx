import React from 'react';
import MenuBar from './GameMenu/MenuBar';
import MapScreen from './Map/MapScreen';

class GameScreen extends React.Component{
  render(){
    return(
    <div>
      <MapScreen/>
      <MenuBar/>
    </div>
    )
  }
}

export default GameScreen;