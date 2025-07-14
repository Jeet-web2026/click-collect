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

const Blogs = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )
    return (
        <>
            <section className='p-14 bg-[#faebd726]'>
                <div className="flex justify-center items-center">
                    <div className="bg-red-700 w-[7%] h-[7px]"></div>
                </div>
                <p className='uppercase text-center font-medium text-lg mt-2'>latest news & updates</p>
                <h2 className='capitalize text-center text-4xl font-bold mb-1 mt-3'>latest news, advices & latest</h2>
                <h2 className='capitalize text-center text-4xl font-bold'>posts from our blog</h2>
                <div className="px-14 mt-8 mx-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 py-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <div className="relative">
                                        <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                        <span className="absolute -bottom-2 right-3 rounded-sm bg-red-700 p-2">
                                            <i className="ri-news-line text-white text-3xl"></i>
                                        </span>
                                    </div>
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 py-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <div className="relative">
                                        <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                        <span className="absolute -bottom-2 right-3 rounded-sm bg-red-700 p-2">
                                            <i className="ri-news-line text-white text-3xl"></i>
                                        </span>
                                    </div>
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 py-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <div className="relative">
                                        <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                        <span className="absolute -bottom-2 right-3 rounded-sm bg-red-700 p-2">
                                            <i className="ri-news-line text-white text-3xl"></i>
                                        </span>
                                    </div>
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 py-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <div className="relative">
                                        <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                        <span className="absolute -bottom-2 right-3 rounded-sm bg-red-700 p-2">
                                            <i className="ri-news-line text-white text-3xl"></i>
                                        </span>
                                    </div>
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
            <section className="p-10 bg-[#faebd726]">
                <div className="px-14 mx-12">
                    <Carousel
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            loop: true
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem className="basis-1/5">
                                <img src="/assets/images/company-logo.jpg" alt="" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/5">
                                <img src="/assets/images/compnay-logo-2.jpg" alt="" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/5">...</CarouselItem>
                            <CarouselItem className="basis-1/5">...</CarouselItem>
                            <CarouselItem className="basis-1/5">...</CarouselItem>
                            <CarouselItem className="basis-1/5">...</CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Blogs
