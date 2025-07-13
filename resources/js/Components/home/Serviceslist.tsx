import * as React from 'react'
import { Card } from "../ui/card"
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

const Serviceslist = () => {
    const [isHover, setHover] = React.useState(false)
    const plugin = React.useRef(
        Autoplay({ delay: 2000 })
    )
    return (
        <section className="bg-[#faebd726] py-14 px-8">
            <div className="flex justify-center items-center mb-3">
                <div className="w-[6%] h-[5px] bg-red-800"></div>
            </div>
            <p className="uppercase text-center mb-2 text-base font-bold">specialisation the transportations</p>
            <h2 className="text-center capitalize text-4xl font-black">specialist logistics services</h2>
            <Card className="my-10 border-0 bg-transparent shadow-none">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={() => {
                        plugin.current?.stop();
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        plugin.current?.reset();
                        setHover(false);
                    }}
                    opts={{
                        loop: true,
                    }}
                    className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/trucks-image.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-truck-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>road services</h3>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/air-services.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-plane-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>Air Transportation</h3>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/ssea-transportation.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-ship-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>sea freight</h3>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/train-freight.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-train-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>trains freight</h3>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/digital-transportation.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-signal-tower-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>digital services</h3>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 relative lg:basis-1/5 px-3 mx-3 h-64 bg-[url(/assets/images/other-transportation.jpg)] bg-cover rounded-md overflow-hidden">
                            <div className='bg-[#00000054] absolute w-full h-full top-0 left-0 z-10'></div>
                            <span className='z-20 absolute text-5xl bg-white left-0 px-3 py-2 top-0' style={{ borderRadius: '0px 0px 15px 0px' }}><i className="ri-add-box-line text-red-700 text-center"></i></span>
                            <p className='text-yellow-400 absolute bottom-12 capitalize z-20 text-base'>we offer</p>
                            <h3 className='text-white absolute bottom-5 capitalize z-20 text-2xl font-bold'>other services</h3>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext className={`right-2 transition-opacity duration-300 h-10 w-10 ${isHover ? 'opacity-100' : 'opacity-0'}`} />
                    <CarouselPrevious className={`left-2 transition-opacity duration-300 h-10 w-10 ${isHover ? 'opacity-100' : 'opacity-0'}`} />
                </Carousel>
            </Card>
            <Card className='flex justify-center items-center border-0 mt-14 bg-transparent shadow-none'>
                <div className="flex items-center relative jsutify-center">
                    <img src="/assets/images/trucks-image.jpg" alt="our-services" className='h-[70px] w-[80px] rounded-md shadow-sm' />
                    <span className='absolute z-10 px-2 py-1 border border-white text-white text-xl left-14 shadow-md bg-red-700 rounded-full'><i className="ri-mail-send-fill"></i></span>
                    <div className='ms-5'>
                        <h3 className='text-lg font-bold capitalize'>simplify your freight today</h3>
                        <p className='opacity-75 capitalize text-sm'>Please share your thoughts with us <br />- we'll get back to you shortly.</p>
                    </div>
                </div>
            </Card>
        </section>
    )
}

export default Serviceslist
