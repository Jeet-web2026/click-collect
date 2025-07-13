import React from 'react'
import { Card } from '../ui/card'
import { Link } from '@inertiajs/react'
import { Button } from '../ui/button'

const Serviceinfo = () => {
    return (
        <section className='p-14 bg-[#090812]'>
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <div className="flex justify-start items-center mb-2">
                        <div className='bg-red-700 w-[12%] h-[7px]'></div>
                    </div>
                    <p className='text-white uppercase text-lg font-medium'>our services</p>
                    <h2 className='text-4xl text-white font-bold capitalize mt-3'>services we are providing <br />to the customers.</h2>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div>
                        <div className="flex justify-between items-center gap-14">
                            <div>
                                <h5 className='text-white text-2xl font-medium text-end'>1210</h5>
                                <p className='text-white text-base opacity-75 capitalize'>total transport vehicles</p>
                            </div>
                            <div>
                                <h5 className='text-white text-2xl font-medium text-end'>1780</h5>
                                <p className='text-white text-base opacity-75 capitalize'>total centres</p>
                            </div>
                        </div>
                        <img src="/assets/images/air-services.jpg" alt="services" className='w-full h-16 object-cover object-top mt-3' />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 justify-center items-center mt-10">
                <Card className='flex rounded-sm overflow-hidden border-0 w-1/3'>
                    <div className='w-1/3 bg-red-700 px-3 pt-5 flex justify-center'>
                        <div className='relative'>
                            <i className="ri-service-line text-white text-4xl block border border-white px-2 py-1.5 rounded-full"></i>
                            <i className="ri-aspect-ratio-line text-white text-4xl block absolute bottom-2 left-2"></i>
                        </div>
                    </div>
                    <div className="w-full ps-5 py-5">
                        <h4 className='capitalize font-bold text-2xl mb-2'>transport services</h4>
                        <p className='capitalize text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis.</p>
                        <Button variant="outline" className='-mb-2'>
                            <Link href="google.com" className='capitalize'>view more<i className="ri-arrow-right-double-line ms-2 text-lg"></i></Link>
                        </Button>
                    </div>
                </Card>
                <Card className='flex rounded-sm overflow-hidden border-0 w-1/3'>
                    <div className='w-1/3 bg-red-700 px-3 pt-5 flex justify-center'>
                        <div className='relative'>
                            <i className="ri-printer-cloud-line text-white text-4xl block border border-white px-2 py-1.5 rounded-full"></i>
                            <i className="ri-aspect-ratio-line text-white text-4xl block absolute bottom-2 left-2"></i>
                        </div>
                    </div>
                    <div className="w-full ps-5 py-5">
                        <h4 className='capitalize font-bold text-2xl mb-2'>digital services</h4>
                        <p className='capitalize text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis.</p>
                        <Button variant="outline" className='-mb-2'>
                            <Link href="google.com" className='capitalize'>view more<i className="ri-arrow-right-double-line ms-2 text-lg"></i></Link>
                        </Button>
                    </div>
                </Card>
                <Card className='flex rounded-sm overflow-hidden border-0 w-1/3'>
                    <div className='w-1/3 bg-red-700 px-3 pt-5 flex justify-center'>
                        <div className='relative'>
                            <i className="ri-apps-2-add-line text-white text-4xl block border border-white px-2 py-1.5 rounded-full"></i>
                            <i className="ri-aspect-ratio-line text-white text-4xl block absolute bottom-2 left-2"></i>
                        </div>
                    </div>
                    <div className="w-full ps-5 py-5">
                        <h4 className='capitalize font-bold text-2xl mb-2'>other services</h4>
                        <p className='capitalize text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis.</p>
                        <Button variant="outline" className='-mb-2'>
                            <Link href="google.com" className='capitalize'>view more<i className="ri-arrow-right-double-line ms-2 text-lg"></i></Link>
                        </Button>
                    </div>
                </Card>
            </div>
            <p className='text-base text-white text-center mt-8'>Looking for a reliable logistics management system to streamline your supply chain operations?<Button className='capitalize text-white ms-2 border-0 bg-red-700 rounded-none' variant="outline">get a touch</Button></p>
        </section>
    )
}

export default Serviceinfo