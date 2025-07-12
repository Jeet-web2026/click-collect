const About = () => {
    return (
        <section className='flex lg:flex-row flex-col p-14 gap-8'>
            <div className='w-1/2 relative pe-10'>
                <img src="/assets/images/top-about.jpg" alt="back-about" className='h-[450px] w-5/6 object-cover -mt-[15%] rounded shadow-md border-b p-1.5 border-gray-200' loading='lazy' />
                <img src="/assets/images/trucks-image.jpg" alt="back-about" className='h-64 w-64 object-cover rounded shadow-md absolute -bottom-9 right-2' loading='lazy' />
            </div>
            <div className='w-1/2 relative pe-14'>
                <div className='w-[10%] h-[10px] bg-red-800 mb-4'></div>
                <h6 className='uppercase text-base font-medium'>about company</h6>
                <h2 className='text-4xl/[50px] font-black capitalize my-3'>global logistics solution provider 1996</h2>
                <p className='capitalize text-lg text-red-700 font-medium'>simplify your thought and logistics with a personal approach.</p>
                <p className='my-3 text-base opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur vero tempora perferendis quae, ipsam dolore fugiat facilis necessitatibus ad.</p>
                <div className="flex flex-row justify-between">
                    <div className='text-base'>Transport</div>
                    <div className='text-base'>85%</div>
                </div>
                <div className="flex flex-row mt-2 mb-4">
                    <div className='w-[85%] bg-red-800 h-[10px]'></div>
                    <div className='w-[15%] bg-gray-200 h-[10px]'></div>
                </div>
                <div className='flex items-center justify-start'>
                    <img src="/assets/images/user_default.jpg" alt="default-image" className='h-[70px] rounded-full border p-1' loading='lazy' />
                    <div className='ms-3'>
                        <h5 className='capitalize text-base font-bold mb-0'>john doe</h5>
                        <h6 className='capitalize text-xs opacity-75 mb-0'>CEO of company</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About