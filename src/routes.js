import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Intro from './pages/Intro/'
import Chat from './pages/Chat'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Intro}/>
      <Route path="/chat" exact component={Chat}/>
    </BrowserRouter>
  )
}
