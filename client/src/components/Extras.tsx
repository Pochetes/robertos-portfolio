import * as React from "react"

const Extras = () => (
    <section className="space-y-32">
        <h1 className="mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main" >here is ... cool stuff</h1>
        
        {/* Contributions section */}
        <div className="xs:flex xs:flex-col xs:space-y-10 lg:flex-row">
            <div className="xs:mx-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:self-end xl:mx-auto xl:ml-20">
                <h2 className="xs:text-3xl sm:text-4xl xl:text-5xl">Contributions</h2>
                <p className="text-gray-500 xs:text-md sm:text-lg xl:text-xl">This is my motivation to build robust and reproducible code.</p>
            </div>
            <img className="xs:scale-y-125 xs:mx-1 sm:scale-y-110 sm:mx-4 lg:self-start lg:mx-0 lg:mr-7" src="https://ghchart.rshah.org/Pochetes" alt="My Github Chart" />
        </div>
        
        {/* Podcasts section*/}
        <div className="xs:flex xs:flex-col xs:space-y-10 lg:grid lg:grid-cols-2 lg:ml-7">
            <div className="xs:ml-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:order-2 lg:self-center lg:mr-5">
                <h2 className="xs:text-3xl sm:text-4xl lg:text-center xl:text-5xl">Podcasts</h2>
                <p className="text-gray-500 xs:text-md sm:text-lg lg:text-center xl:text-xl">Arguably the most thought-provoking set of long-form conversations ever.</p>
            </div>
            <div className="xs:grid xs:grid-cols-1 xs:gap-6 xs:justify-items-center sm:gap-10 lg:gap-y-7 lg:grid-cols-2 lg:order-1">
                <iframe className="rounded-xl shadow-xl xs:w-4/5 lg:w-60 xl:w-80" src="https://open.spotify.com/embed/show/2IqXAVFR4e0Bmyjsdc8QzF?utm_source=generator&theme=0" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe className="rounded-xl shadow-xl xs:w-4/5 lg:w-60 xl:w-80" src="https://open.spotify.com/embed/show/2MAi0BvDc6GTFvKFPXnkCL?utm_source=generator" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe className="rounded-xl shadow-xl xs:w-4/5 lg:w-60 lg:col-start-1 lg:col-span-2 xl:w-80" src="https://open.spotify.com/embed/episode/2jAYGAbZHxReyhtK6kI5xG?utm_source=generator" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>

        {/* Albums section */}
        <div className="xs:flex xs:flex-col xs:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
            <div className="xs:ml-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:ml-20 lg:self-center lg:col-start-1">
                <h2 className="xs:text-3xl sm:text-4xl lg:text-center xl:text-5xl">Albums</h2>
                <p className="text-gray-500 xs:text-md sm:text-lg lg:text-center xl:text-xl">The sickest pieces of art from my favorite musical geniuses.</p>
            </div>
            <iframe className="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-end-3 lg:ml-24 xl:w-128" src="https://open.spotify.com/embed/album/2d9BCZeAAhiZWPpbX9aPCW?utm_source=generator" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe className="rounded-xl shadow-xl xs:w-fit xs:self-center md:w-128 lg:w-80 lg:col-start-1 lg:ml-32 xl:w-128 xl:ml-36" src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </section>
)

export default Extras