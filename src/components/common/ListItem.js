import React, { Component } from 'react';
import '../../style/style.css'

export default  class ListItem extends Component{
  render(){
    return(
        <div className="ss-list__item">
          <div className="ss-item__left animation"/>
          <div className="ss-item__right">
            <p className="loading-block animation" style=" width: 95%"/>
            <p className="loading-block animation " style=" width: 95%" />
            <p className="loading-block animation" style=" width: 82%" />
            <p className="loading-block animation" style=" width: 60%" />
            <p className="loading-block animation" style=" width: 18%" />
          </div>
        </div>
    );
  }
}