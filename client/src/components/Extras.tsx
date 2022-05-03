import * as React from "react"

const Extras = () => (
    <section className="space-y-32">
        <h1 className="mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main" >here is ... cool stuff</h1>
        <div className="">
            <img className="scale-150 mx-auto" src="https://ghchart.rshah.org/Pochetes" alt="My Github Chart" />
        </div>
        <div className="grid grid-cols-3 justify-items-center">
            <iframe className="rounded-xl shadow-xl" src="https://open.spotify.com/embed/show/2IqXAVFR4e0Bmyjsdc8QzF?utm_source=generator&theme=0" width="70%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe className="rounded-xl shadow-xl" src="https://open.spotify.com/embed/show/2MAi0BvDc6GTFvKFPXnkCL?utm_source=generator" width="70%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe className="rounded-xl shadow-xl" src="https://open.spotify.com/embed/episode/2jAYGAbZHxReyhtK6kI5xG?utm_source=generator" width="70%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div className="grid grid-cols-2 justify-items-center">
        <iframe className="rounded-xl shadow-xl" src="https://open.spotify.com/embed/album/2d9BCZeAAhiZWPpbX9aPCW?utm_source=generator" width="50%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe className="rounded-xl shadow-xl" src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator" width="50%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </section>
)

export default Extras