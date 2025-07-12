import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'

const Ourservicesshort = () => {
    return (
        <section className='flex lg:flex-row flex-col p-14 bg-[#faebd726] items-center justify-between gap-10'>
            <div className='lg:w-1/2 w-full'>
                <h4 className='text-4xl text-gray-700 font-medium'>We offers cost efficient</h4>
                <h4 className='text-4xl text-black font-black capitalize mt-3'>Transport shipping & Best Services.</h4>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col lg:flex-row items-center gap-5'>
                <Card className='lg:w-1/3 w-full shadow-lg border-gray-100'>
                    <CardContent>
                        <CardHeader className='text-center bg-gray-100 rounded-b-full mb-3 border-red-100 border-b border-l border-r'>
                            <i className="ri-creative-commons-nc-line text-4xl text-red-700"></i>
                        </CardHeader>
                        <CardDescription className='capitalize text-2xl font-semibold text-black text-center'>
                            optimised costs
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className='lg:w-1/3 w-full shadow-lg border-gray-100'>
                    <CardContent>
                        <CardHeader className='text-center bg-gray-100 rounded-b-full mb-3 border-red-100 border-b border-l border-r'>
                            <i className="ri-time-line text-4xl text-red-700"></i>
                        </CardHeader>
                        <CardDescription className='capitalize text-2xl font-semibold text-black text-center'>
                            reduce travel time
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className='lg:w-1/3 w-full shadow-lg border-gray-100'>
                    <CardContent>
                        <CardHeader className='text-center bg-gray-100 rounded-b-full mb-3 border-red-100 border-b border-l border-r'>
                            <i className="ri-calendar-check-line text-4xl text-red-700"></i>
                        </CardHeader>
                        <CardDescription className='capitalize text-2xl font-semibold text-black text-center'>
                            delivery on time
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Ourservicesshort