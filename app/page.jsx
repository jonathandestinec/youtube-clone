import React from 'react'
import TopNav from "@/app/Components/TopNav"
import MainPage from './Components/MainPage'

function page() {
  return (
    <div className=' relative'>

      <TopNav></TopNav>
      <MainPage></MainPage>

    </div>
  )
}

export default page