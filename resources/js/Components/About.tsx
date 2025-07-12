import React from 'react'

const About = () => {
    return (
        <section className='flex lg:flex-row flex-col p-14 gap-10'>
            <div className='w-1/2 relative pe-10'>
                <img src="/assets/images/top-about.jpg" alt="back-about" className='h-[450px] w-5/6 object-cover -mt-[15%] rounded shadow-md' loading='lazy' />
                <img src="/assets/images/trucks-image.jpg" alt="back-about" className='h-48 w-48 object-cover rounded shadow-md absolute -bottom-8 right-5' loading='lazy' />
            </div>
            <div className='w-1/2 relative'>

            </div>
        </section>
    )
}

export default About