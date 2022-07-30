import React from 'react'
import HomeBanner from '../components/HomeBanner'
import CodeInput from './CodeInput'


function Home() {
  return (
    <div>
      <HomeBanner title={{name:"roki",desc:"rock star"}}/>
      <CodeInput />
    </div>
  )
}

export default Home
