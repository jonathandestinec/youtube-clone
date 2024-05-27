import React from 'react'
import { Videos } from '../src/data'
import Image from 'next/image'
import { Avatar } from '@mui/material'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    subsets: ["latin"],
    weight: ["500", "100", "300"]
})

function VideoCard() {

    const returnRoundViews = (viewsCount) => {
        console.log(typeof viewsCount)
        return (viewsCount > 999 ? (`${Math.sign(viewsCount) * ((Math.abs(viewsCount) / 1000).toFixed(1))} K Views . `) : viewsCount)
    }

    const getVideoDate = (videoTime) => {
        const videoDate = new Date(`${videoTime}`)
        return `${videoDate.getDay()} ${videoDate.getDay() > 1 ? "days ago" : "day ago"}`
    }

    const getVideoDuration = (videoDuration) => {
        return (
            `${(Math.floor(videoDuration/60))} : ${(60- Math.floor(videoDuration/60) )}`
        )
    }

    return (
        <div className=' grid grid-cols-3 gap-5 w-5/6 ml-auto mr-auto mt-80 h-screen -z-10'>
            {
                Videos().map((video, i) => {
                    return (
                        <div className=' w-auto h-auto rounded-xl mb-10 cursor-pointer' key={i}>

                            <div className=' relative'>

                                <Image
                                    src={video.cover}
                                    width={150}
                                    height={150}
                                    alt={`${video.title}`}
                                    className=' w-full rounded-xl'
                                >

                                </Image>

                                <h1 className=' absolute bottom-0 right-0 mb-3 mr-3 pl-1 pr-1 rounded-md bg-black bg-opacity-75 text-sm'>{getVideoDuration(video.durationS)}</h1>

                            </div>


                            <div className=' flex items-center justify-left mt-3 w-full gap-5'>

                                <Avatar
                                    src={`${video.cover}`}
                                ></Avatar>

                                <div>
                                    <h1 className={`${roboto.className} text-lg font-normal`}>{video.title}</h1>
                                    <h5 className={`${roboto.className} text-sm font-normal text-zinc-400`}>{video.account}</h5>
                                    <h5 className={`${roboto.className} text-sm font-normal text-zinc-400`}>{returnRoundViews(video.views)} <span>{getVideoDate(video.time)}</span></h5>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoCard