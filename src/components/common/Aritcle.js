import React, { Component } from 'react';
import '../../style/style.css'

export default  class ListItem extends Component{
  render(){
     return(
        <div className="ss-article__item">
          <div className="ss-article-left animation"/>
          <div className="ss-article-right">
            <p className="loading-block-small animation" style=" width: 100%"/>
            <p className="loading-block-small animation" style=" width: 80%"/>
          </div>
        </div>
     );
  }
}