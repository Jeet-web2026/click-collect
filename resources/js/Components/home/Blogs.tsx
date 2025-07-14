import * as React from "react"

import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

const Blogs = () => {
    return (
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card className="rounded-md border border-gray-100 overflow-hidden shadow-md">
                                    <img src="/assets/images/air-services.jpg" alt="services" className="h-48 w-full mb-3" />
                                    <CardContent>
                                        <p className="capitalize text-base opacity-75 font-medium">lorem ipsum</p>
                                        <h5 className="mt-3 text-lg font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sint!</h5>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default Blogs
