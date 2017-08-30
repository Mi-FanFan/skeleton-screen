import React, { Component } from 'react';
import '../../style/style.css'

class Skeleton extends Component {
  render() {
    return (
        <div className="skeleton-loading-content">
          <p className="skeleton-loading-block" style={{ width: '94%' }} />
          <p>
            <span className="skeleton-loading-block" style={{ width: '28%' }} />
            <span className="skeleton-loading-block" style={{ width: '62%' }} />
          </p>
          <p>
            <span className="skeleton-loading-block" style={{ width: '22%' }} />
            <span className="skeleton-loading-block" style={{ width: '66%' }} />
          </p>
          <p>
            <span className="skeleton-loading-block" style={{ width: '56%' }} />
            <span className="skeleton-loading-block" style={{ width: '39%' }} />
          </p>
          <p>
            <span className="skeleton-loading-block" style={{ width: '21%' }} />
            <span className="skeleton-loading-block" style={{ width: '15%' }} />
            <span className="skeleton-loading-block" style={{ width: '40%' }} />
          </p>
        </div>
    );
  }
}

export default Skeleton;