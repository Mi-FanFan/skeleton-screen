import React, { Component } from 'react';
import '../../style/style.css'

export default  class ListItem extends Component{
  render(){
    return(
      <div className="ss-edit__item">
        <div className="ss-edit-left animation"/>
        <div className="ss-edit-right">
          <p className="loading-block-small animation" style=" width: 90%"/>
          <p className="loading-block-small animation" style=" width: 90%"/>
          <p className="loading-block-small animation" style=" width: 30%"/>
        </div>
      </div>
    );
  }
}