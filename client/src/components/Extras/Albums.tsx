import React from 'react'
import SpotifyPlayer from './SpotifyPlayer'

const Albums = () => {
  return (
    <div className="xs:flex xs:flex-col xs:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
        <div className="xs:ml-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:ml-20 lg:self-center lg:col-start-1">
            <h2 className="xs:text-3xl sm:text-4xl lg:text-center xl:text-5xl">Albums</h2>
            <p className="text-gray-500 xs:text-md sm:text-lg lg:text-center xl:text-xl">The sickest pieces of art from my favorite musical geniuses.</p>
        </div>
        <SpotifyPlayer 
        tailwindLayout="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-end-3 lg:ml-24 xl:w-128"
        src="https://open.spotify.com/embed/album/2d9BCZeAAhiZWPpbX9aPCW?utm_source=generator"
        type="album"
        />
        <SpotifyPlayer 
        tailwindLayout="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-start-1 lg:ml-32 xl:w-128 xl:ml-36"
        src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator"
        type="album"
        />
        {/* <iframe className="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-end-3 lg:ml-24 xl:w-128" src="https://open.spotify.com/embed/album/2d9BCZeAAhiZWPpbX9aPCW?utm_source=generator" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe className="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-start-1 lg:ml-32 xl:w-128 xl:ml-36" src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
    </div>
  )
}

export default Albums