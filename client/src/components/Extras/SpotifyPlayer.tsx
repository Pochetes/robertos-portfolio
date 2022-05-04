import React from 'react'

const SpotifyPlayer = ({ tailwindLayout, src, type}) => {
  return (
    <iframe 
    className={tailwindLayout} 
    src={src} 
    height={type === "podcast" ? "232" : "380"} 
    frameBorder="0" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  )
}

export default SpotifyPlayer