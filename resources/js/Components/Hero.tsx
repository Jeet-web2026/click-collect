import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import {
    Card,
} from "./ui/card"
import { Button } from './ui/button'
import Ourservicesshort from './Ourservicesshort'
const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
    )
    return (
        <>
            <main className="h-screen w-full">
                <Card className='h-full w-full overflow-hidden flex items-center justify-center rounded-none'>
                    <Carousel
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        className="w-full max-w-full h-full">
                        <CarouselContent>
                            <CarouselItem>
                                <Card className='h-screen w-full flex flex-col lg:flex-row rounded-none border-none relative'>
                                    <div className='bg-[#0000006e] absolute w-5/6 h-full z-10' style={{ clipPath: 'polygon(0 0, 50% 0, 95% 100%, 0 100%)' }}></div>
                                    <div className='bg-[#00000061] absolute w-full h-full z-10'></div>
                                    <div className="bg-[url(/assets/images/hero-bg.jpg)] bg-cover bg-center absolute w-full h-full"></div>
                                    <div className="flex justify-center lg:ps-[80px] flex-row w-1/2 items-center h-full w-full text-white">
                                        <div className='z-20 pt-14 px-7'>
                                            <h1 className='text-white z-50 text-[65px]/[70px] font-bold capitalize'>get specialist cargo services worlwide</h1>
                                            <Button
                                                variant="ghost"
                                                className="border hover:text-red-700 border-transparent hover:border-red-700 bg-red-700 mt-10 px-6 text-lg py-6 uppercase rounded-none"
                                            >
                                                Request for a call
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center z-50 flex-row w-1/2 items-center relative h-full w-full text-white pt-14">
                                        <img src="/assets/images/truck-sample.png" alt="truck-services" className='h-[550px] -left-5 absolute w-full' />
                                    </div>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className='h-screen w-full flex flex-col lg:flex-row rounded-none border-none relative'>
                                    <div className='bg-[#0000006e] absolute w-5/6 h-full z-10' style={{ clipPath: 'polygon(0 0, 50% 0, 95% 100%, 0 100%)' }}></div>
                                    <div className='bg-[#00000061] absolute w-full h-full z-10'></div>
                                    <div className="bg-[url(/assets/images/hero-bg.jpg)] bg-cover bg-center absolute w-full h-full"></div>
                                    <div className="flex justify-center lg:ps-[80px] flex-row w-1/2 items-center h-full w-full text-white">
                                        <div className='z-20 pt-14 px-7'>
                                            <h1 className='text-white z-50 text-[65px]/[70px] font-bold capitalize'>get specialist cargo services worlwide</h1>
                                            <Button
                                                variant="ghost"
                                                className="border hover:text-red-700 border-transparent hover:border-red-700 bg-red-700 mt-10 px-6 text-lg py-6 uppercase rounded-none"
                                            >
                                                Request for a call
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center z-50 flex-row w-1/2 items-center relative h-full w-full text-white pt-14">
                                        <img src="/assets/images/truck-sample.png" alt="truck-services" className='h-[550px] -left-5 absolute w-full' />
                                    </div>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNext className='right-5 top-[50%] z-20' />
                        <CarouselPrevious className='left-5 top-[50%] z-20' />
                    </Carousel>
                </Card>
            </main>
            <Ourservicesshort />
        </>
    )
}

export default Hero
