import React from 'react';
import GameButton from '../helpers/GameButton';
import {withRouter} from 'react-router-dom'

class MenuBar extends React.Component{
  constructor(props, context){
    super(props, context);

    this.quitGame = this.quitGame.bind(this);
  }

  quitGame(){
    //for now we'll just redirect to home, but later we'll have some saving and the like
    this.props.history.push('/');
  }

  render(){
    return(
    <div id="MenuBar"> 
      <GameButton text="Quit" buttonType="danger" onClick={this.quitGame}/>
    </div>
    )
  }
}

export default withRouter(MenuBar);