import React from 'react'
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="spinner">
        <ReactLoading className="spinner" type="spinningBubbles" color="#0000FF" height={100} width={120}/>
    </div>
  )
}

export default Loader