import React from 'react'

function HomeBanner(props) {
  return (
    <div>
      <h2>{props.title.name}</h2>
      <h2>{props.title.desc}</h2>
    </div>
  )
}

export default HomeBanner
