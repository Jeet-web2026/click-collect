const Contactus = () => {

    return (
        <section className='p-14 flex lg:flex-row flex-col gap-10'>
            <div className='lg:w-1/2 w-full'>
                <div className='bg-red-700 w-[15%] h-[7px]'></div>
                <p className='uppercase text-medium mt-2 font-medium text-lg'>connect with us</p>
                <h2 className='capitalize text-3xl font-bold mt-3'>what they are taking about company</h2>
                <p className='mt-3 opacity-75 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ullam vero dolor unde expedita mollitia enim magnam sint? Ab consequuntur tenetur ullam molestiae velit perspiciatis modi sapiente? Rerum sunt maxime a iure nulla! Vero, illum!</p>
                <div className="flex justify-start items-center mt-5">
                    <img src="/assets/images/user_default.jpg" alt="user-image" className='rounded-full w-14 h-14 me-3 shadow-sm' />
                    <div>
                        <h6 className='capitalize text-base font-medium text-base'>john doe</h6>
                        <span className='text-sm opacity-75'>CEO of xyz company</span>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                
            </div>
        </section>
    )
}

export default Contactus