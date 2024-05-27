"use client"

import React, { useRef } from 'react'
import VideoCard from './VideoCard'
import { Home, SubscriptionsOutlined, Subscriptions, HomeOutlined, VideoLibrary, VideoLibraryOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { Tags } from '../src/data'
import { Chip, List, Stack } from '@mui/material'

function MainPage() {

    const handleChipClick = () => {
        console.log("hello")
    }

    const currentSideTabBtn = useRef("home")

    return (
        <div className=' flex items-center justify-center relative'>

            {/* Main Page*/}

            {/* Side Nav */}

            <div className='h-full w-16 side-nav block left-0 overflow-hidden fixed z-20 mt-auto'>

                <div className='w-min mb-10 ml-auto mr-auto mt-7'>
                    <i className="fi fi-rr-bars-staggered text-white text-2xl cursor-pointer text-center"></i>
                </div>


                <div className=' w-min mb-6 ml-auto mr-auto'>
                    <i className={`text-2xl cursor-pointer text-center ml-auto mr-auto after:content-['Home'] block after:block after:text-sm after:not-italic fi fi-rr-home`}></i>
                </div>

                <div className='mb-6 ml-auto mr-auto'>
                    <Image
                        src={"/assets/shortsIcon.svg"}
                        width={25}
                        height={25}
                        alt='Shorts Icon'
                        className="cursor-pointer text-center ml-auto mr-auto text-2xl"
                    ></Image>
                    <h1 className=' text-xs text-center mt-2'>Shorts</h1>
                </div>

                <div className=' mb-6 ml-auto mr-auto w-max text-center cursor-pointer'>
                    <SubscriptionsOutlined className={`text-2xl w-max ml-auto mr-auto`} />
                    <h1 className=' text-xs text-center mt-2'>Shorts</h1>
                </div>

                <div className='cursor-pointer text-center ml-auto mr-auto'>
                    <VideoLibraryOutlined className=' text-2xl w-max ml-auto mr-auto'></VideoLibraryOutlined>
                    <h1 className=' text-xs text-center mt-2'>You</h1>
                </div>

            </div>

            {/* Tags */}

            <div className=' flex overflow-x-scroll w-full pl-36 pr-36 -scroll-mb-9 tags-container gap-5 bg-black left-0 fixed top-0 z-10 items-center justify-between mt-10 pt-14 pb-5'>
                {
                    Tags().tags.map((tag, i) => {
                        return (
                            <Chip label={`${tag}`} variant='outlined' key={i} className=' text-white bg-zinc-800' onClick={handleChipClick} />
                        )
                    })
                }
            </div>

            <div className=' flex items-center justify-between w-full relative h-screen overflow-y-auto'>

                <VideoCard></VideoCard>

            </div>
        </div>
    )
}

export default MainPage