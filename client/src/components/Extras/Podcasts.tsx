import React from 'react'
import SpotifyPlayer from './SpotifyPlayer'

const Podcasts = () => {
  return (
    <div className="xs:flex xs:flex-col xs:space-y-10 lg:grid lg:grid-cols-2 lg:ml-7">
        <div className="xs:ml-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:order-2 lg:self-center lg:mr-5">
            <h2 className="xs:text-3xl sm:text-4xl lg:text-center xl:text-5xl">Podcasts 🎧</h2>
            <p className="text-gray-500 xs:text-md sm:text-lg lg:text-center xl:text-xl">Arguably the most thought-provoking set of long-form conversations ever.</p>
        </div>
        <div className="xs:grid xs:grid-cols-1 xs:gap-6 xs:justify-items-center sm:gap-10 lg:gap-y-7 lg:grid-cols-2 lg:order-1">
            <SpotifyPlayer
            tailwindLayout="rounded-xl shadow-xl xs:w-4/5 lg:w-60 xl:w-80"
            src="https://open.spotify.com/embed/show/2IqXAVFR4e0Bmyjsdc8QzF?utm_source=generator&theme=0"
            type="podcast"
            />
            <SpotifyPlayer
            tailwindLayout="rounded-xl shadow-xl xs:w-4/5 lg:w-60 xl:w-80"
            src="https://open.spotify.com/embed/show/2MAi0BvDc6GTFvKFPXnkCL?utm_source=generator"
            type="podcast"
            />
            <SpotifyPlayer
            tailwindLayout="rounded-xl shadow-xl xs:w-4/5 lg:w-60 lg:col-start-1 lg:col-span-2 xl:w-80"
            src="https://open.spotify.com/embed/episode/2jAYGAbZHxReyhtK6kI5xG?utm_source=generator"
            type="podcast"
            />
        </div>
    </div>
  )
}

export default Podcasts