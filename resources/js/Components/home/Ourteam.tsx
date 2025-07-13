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
        <section className='p-14 bg-[#faebd726]'>
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
                            <Card className="rounded-lg border-gray-200 overflow-hidden bg-transparent">
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 rounded-none w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5">
                                    <p className="capitalize font-medium text-lg mt-3 opacity-75">executive</p>
                                    <h3 className="capitalize font-bold text-2xl">pawan kumar</h3>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-lg border-gray-200 overflow-hidden bg-transparent">
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 rounded-none w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5">
                                    <p className="capitalize font-medium text-lg mt-3 opacity-75">executive</p>
                                    <h3 className="capitalize font-bold text-2xl">pawan kumar</h3>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-lg border-gray-200 overflow-hidden bg-transparent">
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 rounded-none w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5">
                                    <p className="capitalize font-medium text-lg mt-3 opacity-75">executive</p>
                                    <h3 className="capitalize font-bold text-2xl">pawan kumar</h3>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-lg border-gray-200 overflow-hidden bg-transparent">
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 rounded-none w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5">
                                    <p className="capitalize font-medium text-lg mt-3 opacity-75">executive</p>
                                    <h3 className="capitalize font-bold text-2xl">pawan kumar</h3>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 px-10">
                            <Card className="rounded-lg border-gray-200 overflow-hidden bg-transparent">
                                <img src="/assets/images/user_default.jpg" alt="people-image" className="h-64 rounded-none w-full object-cover" loading="lazy" />
                                <CardContent className="mt-5">
                                    <p className="capitalize font-medium text-lg mt-3 opacity-75">executive</p>
                                    <h3 className="capitalize font-bold text-2xl">pawan kumar</h3>
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
