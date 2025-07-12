import React from 'react'

const About = () => {
    return (
        <section className='flex lg:flex-row flex-col p-14 gap-10'>
            <div className='w-1/2 relative pe-10'>
                <img src="/assets/images/top-about.jpg" alt="back-about" className='h-[450px] w-5/6 object-cover -mt-[15%] rounded shadow-md' loading='lazy' />
                <img src="/assets/images/trucks-image.jpg" alt="back-about" className='h-48 w-48 object-cover rounded shadow-md absolute -bottom-8 right-5' loading='lazy' />
            </div>
            <div className='w-1/2 relative pe-14'>
                <h6 className='uppercase text-base font-medium'>about company</h6>
                <h2 className='text-4xl/[50px] font-black capitalize my-3'>global logistics solution provider 1996</h2>
                <p className='capitalize text-lg text-red-700 font-medium'>simplify your thought and logistics with a personal approach.</p>
            </div>
        </section>
    )
}

export default About