import * as React from "react"

import { Card } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import { Button } from "../ui/button"

const Ourbranches = () => {
    return (
        <section className='p-14 bg-[#faebd726] flex lg:flex-row flex-col gap-14'>
            <div className='w-1/3'>
                <div className="flex justify-start items-center">
                    <div className="bg-red-700 w-[25%] h-[7px]"></div>
                </div>
                <p className='uppercase text-lg font-medium mt-2'>our network</p>
                <h2 className='capitalize text-4xl font-bold my-3'>works across the world</h2>
                <p className='text-base opacity-75 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt neque distinctio aut fuga quibusdam.</p>
                <Button className="capitalize mt-5 text-base font-medium" variant="outline">view details<i className="ms-1 text-lg ri-arrow-right-double-line"></i></Button>
            </div>
            <div className='w-full h-full'>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="relative rounded-sm overflow-hidden">
                                    <img src="/assets/images/american-services.jpg" alt="world-wide-services" className="h-80 object-cover rounded-sm" loading="lazy" />
                                    <div className="absolute w-full h-full bg-[#00000066] top-0 left-0">
                                        <p className="text-yellow-300 z-10 capitalize text-base font-medium absolute left-5 bottom-10"><i className="ri-map-pin-line me-2 text-lg"></i>we are in</p>
                                        <h4 className="capitalize text-white font-lg text-2xl absolute bottom-2 left-6">America (U.S.A)</h4>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="relative rounded-sm overflow-hidden">
                                    <img src="/assets/images/american-services.jpg" alt="world-wide-services" className="h-80 object-cover rounded-sm" loading="lazy" />
                                    <div className="absolute w-full h-full bg-[#00000066] top-0 left-0">
                                        <p className="text-yellow-300 z-10 capitalize text-base font-medium absolute left-5 bottom-10"><i className="ri-map-pin-line me-2 text-lg"></i>we are in</p>
                                        <h4 className="capitalize text-white font-lg text-2xl absolute bottom-2 left-6">Brazil</h4>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="relative rounded-sm overflow-hidden">
                                    <img src="/assets/images/american-services.jpg" alt="world-wide-services" className="h-80 object-cover rounded-sm" loading="lazy" />
                                    <div className="absolute w-full h-full bg-[#00000066] top-0 left-0">
                                        <p className="text-yellow-300 z-10 capitalize text-base font-medium absolute left-5 bottom-10"><i className="ri-map-pin-line me-2 text-lg"></i>we are in</p>
                                        <h4 className="capitalize text-white font-lg text-2xl absolute bottom-2 left-6">united kingdom</h4>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="relative rounded-sm overflow-hidden">
                                    <img src="/assets/images/american-services.jpg" alt="world-wide-services" className="h-80 object-cover rounded-sm" loading="lazy" />
                                    <div className="absolute w-full h-full bg-[#00000066] top-0 left-0">
                                        <p className="text-yellow-300 z-10 capitalize text-base font-medium absolute left-5 bottom-10"><i className="ri-map-pin-line me-2 text-lg"></i>we are in</p>
                                        <h4 className="capitalize text-white font-lg text-2xl absolute bottom-2 left-6">Australia</h4>
                                    </div>
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

export default Ourbranches


