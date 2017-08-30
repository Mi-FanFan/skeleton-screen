import React, { Component } from 'react';
import '../../style/style.css'

export default  class ListItem extends Component{
  render(){
    return(
      <div className="ss-product__item">
        <div className="ss-product-top animation"/>
        <div className="ss-product-bottom">
          <p className="loading-block-small animation" style=" width: 100%"/>
          <p className="loading-block-small animation" style=" width: 80%"/>
        </div>
      </div>

    );
  }
}