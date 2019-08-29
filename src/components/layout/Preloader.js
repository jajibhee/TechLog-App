import React from 'react'

const Preloader = () => {
    return (
  //     <div class="progress">
  //     <div class="indeterminate"></div>
  // </div>
        <div className="progress blue lighten-4">
              <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
        </div>
    )
}

export default Preloader
