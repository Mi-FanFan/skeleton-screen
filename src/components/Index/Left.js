import React, { Component } from 'react';
import Slider from "./../common/Slider"
import '../../style/style.css'

export default  class ListItem extends Component{
  render(){
    return(
        <div className="ss-container">
          <div className="ss-container-left">
            <Slider/>
            <div className="ss-list">
              <ListItem/>
            </div>
          </div>
        </div>
    );
  }
}