import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const Ourspecilisation = () => {
    return (
        <section className="h-80 bg-cover bg-[url(/assets/images/air-services.jpg)] relative flex justify-center items-center">
            <div className="absolute w-full h-full top-0 left-0 bg-[#0000009c] z-10"></div>
            <Card className='absolute z-20 bg-transparent border-0 shadow-none'>
                <div className="flex justify-center items-center mb-3">
                    <div className='bg-red-700 h-[5px] w-[16%]'></div>
                </div>
                <p className='text-center uppercase text-white'>set your products with our best services</p>
                <h2 className='capitalize text-white text-4xl font-black text-center mb-2'>looking for the best logistics</h2>
                <h2 className='capitalize text-white text-4xl font-black text-center'>transport service?</h2>
                <div className="flex justify-center items-center mt-10">
                    <Button variant="ghost" className='bg-red-700 hover:text-red-700 border hover:border-red-700 border-transparent uppercase text-base px-5 py-5 rounded-none transition ease-in-out duration-500 text-white'>
                        get in touch
                    </Button>
                </div>
            </Card>
        </section>
    )
}

export default Ourspecilisation