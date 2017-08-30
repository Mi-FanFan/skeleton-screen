import React, { Component } from 'react';
import '../../style/style.css'

export default  class  extends Component{
  render(){
    return(
      <p className="loading">
        <span className="loading-block animation" style=" width: 7%"/>
        <span className="loading-block animation" style=" width: 68%"/>
        <span className="loading-block animation" style=" width: 15%"/>
      </p>
    );
  }
}