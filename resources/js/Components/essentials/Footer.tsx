import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Link } from '@inertiajs/react'

const Footer = () => {
    return (
        <>
            <section className='px-14 py-5 bg-[#090812]'>
                <div className="flex lg:flex-row flex-col justify-between">
                    <Card className='bg-transparent border-0'>
                        <CardContent className='flex lg:flex-row flex-col pb-1 items-center'>
                            <span className='border border-red-700 rounded-full py-2 px-2.5'>
                                <i className="ri-mail-open-line text-3xl text-red-700"></i>
                            </span>
                            <div className='ms-3'>
                                <h5 className='text-red-600 text-lg capitalize font-medium'>email us :</h5>
                                <a href="mailto:jeetnath2110@gmail.com" className='text-gray-200 hover:underline hover:text-white'>clickandcollect@gmail.com</a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='bg-transparent border-0'>
                        <CardContent className='flex lg:flex-row flex-col pb-1 items-center'>
                            <span className='border border-red-700 rounded-full py-2 px-2.5'>
                                <i className="ri-phone-line text-3xl text-red-700"></i>
                            </span>
                            <div className='ms-3'>
                                <h5 className='text-red-600 text-lg capitalize font-medium'>call us :</h5>
                                <a href="tel:+91-9163715179" className='text-gray-200 hover:underline hover:text-white'>+(91) 91637 15179</a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='bg-transparent border-0'>
                        <CardContent className='flex lg:flex-row flex-col pb-1 items-center'>
                            <span className='border border-red-700 rounded-full py-2 px-2.5'>
                                <i className="ri-map-pin-line text-3xl text-red-700"></i>
                            </span>
                            <div className='ms-3'>
                                <h5 className='text-red-600 text-lg capitalize font-medium'>locate us :</h5>
                                <a href="mailto:jeetnath2110@gmail.com" className='text-gray-200 hover:underline hover:text-white'>Ramdashatti, Kolkata: 700024</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <footer className='px-14 pt-5 pb-8 bg-black gap-5 flex lg:flex-row flex-col justify-between'>
                <Card className='bg-transparent border-0 w-2/4'>
                    <div className="flex justify-start items-center">
                        <img src="/assets/images/logo.png" alt="website-logo" className='h-24 w-24' />
                        <h2 className='text-white capitalize font-medium text-[32px]'>click & collect</h2>
                    </div>
                    <p className="text-white text-base ms-3">Click & Collect is a modern logistics management system offering shipment tracking, inventory control, warehouse integration, delivery scheduling, and real-time customer communication tools.</p>
                    <Button variant="outline" className='capitalize text-white bg-red-700 border-0 rounded-none text-base mt-5 ms-3 px-5 hover:text-red-700 hover:border hover:border-red-700 border border-transparent transition duration-300'>let's talk</Button>
                </Card>
                <Card className='bg-transparent border-0 w-1/4 flex justify-center pt-8'>
                    <div>
                        <h3 className='text-white capitalize font-medium text-2xl'>events</h3>
                        <ul className='mt-7'>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>live events</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>future events</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>workshops</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>seminars</Link></li>
                            <li className='text-base text-white capitalize'><Link href={route('login')}>blogs</Link></li>
                        </ul>
                    </div>
                </Card>
                <Card className='bg-transparent border-0 w-1/4 flex justify-center pt-8'>
                    <div>
                        <h3 className='text-white capitalize font-medium text-2xl'>useful links</h3>
                        <ul className='mt-7'>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>testimonials</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>vendor's login</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>admin login</Link></li>
                            <li className='text-base text-white capitalize mb-1'><Link href={route('login')}>login</Link></li>
                            <li className='text-base text-white capitalize'><Link href={route('login')}>refer & earn</Link></li>
                        </ul>
                    </div>
                </Card>
                <Card className='bg-transparent border-0 w-2/4 flex justify-start pt-8'>
                    <div>
                        <h3 className='text-white capitalize font-medium text-2xl'>subscribe</h3>
                        <p className='text-white font-medium text-base mt-7 opacity-75'>Subscribe to our newsletter for the latest updates, exclusive offers, expert insights, and important logistics industry news.</p>
                        <form>
                            <input type="text" className='text-base text-black' placeholder='Your Email Here' />
                            <Button variant="outline" className='capitalize text-white bg-red-700 border-0 rounded-none text-base mt-5 ms-3 px-5 hover:text-red-700 hover:border hover:border-red-700 border border-transparent transition duration-300'>subscribe</Button>
                        </form>
                    </div>
                </Card>
            </footer>
            <section className="px-14 pb-5 bg-black">
                <div className="flex justify-center items-center w-full mb-4">
                    <div className="bg-gray-700 h-[2px] w-[100%] mx-3"></div>
                </div>
                <div className="flex justify-between items-center px-3">
                    <div>
                        <p className='text-white text-base font-medium'>Copyright <i className="ri-copyright-line"></i> 2022 - {new Date().getFullYear()}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className='text-white text-xl font-medium capitalize me-5'>follow us :</p>
                        <h6 className='capitalize text-xl text-white me-4'><i className="ri-linkedin-box-fill"></i></h6>
                        <h6 className='capitalize text-xl text-white me-4'><i className="ri-facebook-box-fill"></i></h6>
                        <h6 className='capitalize text-xl text-white me-4'><i className="ri-instagram-fill"></i></h6>
                        <h6 className='capitalize text-xl text-white me-4'><i className="ri-whatsapp-fill"></i></h6>
                        <h6 className='capitalize text-xl text-white'><i className="ri-slack-line"></i></h6>
                    </div>
                    <div className="flex justify-end items-center">
                        <Link href={route('login')} className='text-white text-base capitalize'>privacy policy</Link>
                        <span className='text-white mx-2'>|</span>
                        <Link href={route('login')} className='text-white text-base capitalize'>terms & conditions</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer