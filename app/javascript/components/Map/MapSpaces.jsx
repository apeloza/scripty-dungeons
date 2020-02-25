import React from 'react';
import MapSpace from './MapSpace';
import MapLine from './MapLine';

class MapSpaces extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const renderedMap = this.props.currentMap.map((mapSpace, index) => {
      let mapLine;
      index !== this.props.currentMap.length - 1 ? mapLine = <MapLine/> : mapLine = null; // we skip rendering MapLine if we are rendering the final space
      return (
      <div key={index} className="map-space-container">
        <MapSpace playerPosition={this.props.playerPosition} handlePlayerMovement={this.props.handlePlayerMovement} mapSpaceData={mapSpace} mapIndex={index} />
        {mapLine}
      </div>
      )
  });
    return(
    <div className="map-spaces">
      {renderedMap}
    </div>
    )
  }
}

export default MapSpaces;