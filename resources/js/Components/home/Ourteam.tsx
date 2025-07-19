import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

const Ourteam = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <section className='p-14 bg-[#faebd752]'>
            <div className="flex justify-center items-center">
                <div className="bg-red-700 w-[7%] h-[7px]"></div>
            </div>
            <p className="uppercase text-center font-medium text-lg my-2">our team</p>
            <h2 className="text-center capitalize font-bold text-4xl mb-8">meet our experts</h2>
            <div className="px-14">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className="w-full max-w-full">
                    <CarouselContent className="-ml-1">
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-sm border-gray-200 overflow-hidden group bg-white border-0 shadow-none relative">
                                <div className="absolute z-10 bg-black w-full h-full left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5 absolute z-20 flex flex-row bottom-0 left-0 items-center justify-between w-full">
                                    <div>
                                        <p className="capitalize font-medium text-lg mt-3 opacity-75 text-white">executive</p>
                                        <h3 className="capitalize font-bold text-2xl text-white">pawan kumar</h3>
                                    </div>
                                    <div className="mt-5">
                                        <i className="ri-linkedin-line text-2xl text-white border rounded-full p-1 group-hover:bg-white group-hover:text-black"></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-sm border-gray-200 overflow-hidden group bg-white border-0 shadow-none relative">
                                <div className="absolute z-10 bg-black w-full h-full left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5 absolute z-20 flex flex-row bottom-0 left-0 items-center justify-between w-full">
                                    <div>
                                        <p className="capitalize font-medium text-lg mt-3 opacity-75 text-white">executive</p>
                                        <h3 className="capitalize font-bold text-2xl text-white">pawan kumar</h3>
                                    </div>
                                    <div className="mt-5">
                                        <i className="ri-linkedin-line text-2xl text-white border rounded-full p-1 group-hover:bg-white group-hover:text-black"></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-sm border-gray-200 overflow-hidden group bg-white border-0 shadow-none relative">
                                <div className="absolute z-10 bg-black w-full h-full left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5 absolute z-20 flex flex-row bottom-0 left-0 items-center justify-between w-full">
                                    <div>
                                        <p className="capitalize font-medium text-lg mt-3 opacity-75 text-white">executive</p>
                                        <h3 className="capitalize font-bold text-2xl text-white">pawan kumar</h3>
                                    </div>
                                    <div className="mt-5">
                                        <i className="ri-linkedin-line text-2xl text-white border rounded-full p-1 group-hover:bg-white group-hover:text-black"></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-sm border-gray-200 overflow-hidden group bg-white border-0 shadow-none relative">
                                <div className="absolute z-10 bg-black w-full h-full left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5 absolute z-20 flex flex-row bottom-0 left-0 items-center justify-between w-full">
                                    <div>
                                        <p className="capitalize font-medium text-lg mt-3 opacity-75 text-white">executive</p>
                                        <h3 className="capitalize font-bold text-2xl text-white">pawan kumar</h3>
                                    </div>
                                    <div className="mt-5">
                                        <i className="ri-linkedin-line text-2xl text-white border rounded-full p-1 group-hover:bg-white group-hover:text-black"></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-sm border-gray-200 overflow-hidden group bg-white border-0 shadow-none relative">
                                <div className="absolute z-10 bg-black w-full h-full left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5 absolute z-20 flex flex-row bottom-0 left-0 items-center justify-between w-full">
                                    <div>
                                        <p className="capitalize font-medium text-lg mt-3 opacity-75 text-white">executive</p>
                                        <h3 className="capitalize font-bold text-2xl text-white">pawan kumar</h3>
                                    </div>
                                    <div className="mt-5">
                                        <i className="ri-linkedin-line text-2xl text-white border rounded-full p-1 group-hover:bg-white group-hover:text-black"></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="-left-5" />
                    <CarouselNext className="-right-5" />
                </Carousel>
            </div>
        </section>
    )
}

export default Ourteam
