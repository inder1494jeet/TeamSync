import React from 'react'
import { useDispatch } from 'react-redux'
import {  toogletheme } from '../../../../shared/state/themeSlice';

const Home = () => {
  let dispatch=useDispatch();
  let handlethemechange=()=>{
    dispatch(toogletheme())
  }
  return (
    <div>
      <h1>this is my dashboard home page</h1>
      <button onClick={handlethemechange}>changetheme</button>
    </div>
  )
}

export default Home
