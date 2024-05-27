'use client'

import React from 'react'
import { Roboto } from 'next/font/google'
import MicNoneIcon from '@mui/icons-material/MicNone';
import { Avatar } from '@mui/material';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["500"]
})

function TopNav() {

    return (
        <div className=' fixed left-0 w-full z-20 ml-auto mr-auto mt-0 bg-black'>
            <div className=' flex items-center justify-between w-11/12 h-16 pl-10 pr-10 box-border pt-5 ml-auto mr-auto'>

                {/* Logo and Menu */}

                <div className=' flex items-center justify-between gap-10'>

                    <div className=' flex items-center justify-between gap-2 cursor-pointer'>
                        <i className="fi fi-brands-youtube text-3xl yt-icon"></i>
                        <h1 className={`text-white text-center ${roboto.className} text-lg`}>YouTube</h1>
                    </div>
                </div>

                {/* Search bar */}

                <div className='w-2/4 flex items-center justify-between h-full gap-5'>

                    <div className=' flex items-center justify-between  rounded-full h-full border-gray-900 search-container overflow-hidden w-full'>

                        <input type="text" className=' w-full bg-transparent pl-5 pr-5 box-border flex items-center justify-center h-full border-none' placeholder='Search' />

                        <div className=' flex items-center justify-center h-full bg-zinc-900 p-6 box-border'>
                            <i className="fi fi-rs-search text-white text-lg font-thin text-center cursor-pointer"></i>
                        </div>

                    </div>

                    <div className=' flex items-center justify-center rounded-full bg-zinc-900 w-14 h-12'>
                        <MicNoneIcon></MicNoneIcon>
                    </div>

                </div>

                {/* Profile Icons*/}

                <div className=' flex items-center justify-between gap-10'>

                    <i className="fi fi-rr-upload text-lg cursor-pointer"></i>
                    <i className="fi fi-rr-bell text-lg cursor-pointer"></i>
                    <Avatar alt='Profile' src='/assets/profile.jpg' className=' cursor-pointer'></Avatar>

                </div>

            </div>

        </div>
    )
}

export default TopNav