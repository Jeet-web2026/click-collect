import { Card } from '../ui/card'

const Ourapproach = () => {
    return (
        <section className='flex lg:flex-row flex-col items-center bg-[#090812] gap-10 relative'>
            <Card className='bg-red-700 border-0 shadow-none absolute -top-9 left-[22%] z-20 w-[55%] rounded-none p-6'>
                <div className="flex justify-between items-center">
                    <div>
                        <p className='text-2xl text-white capitalize font-bold'>call our representative</p>
                        <p className='text-white text-sm capitalize mt-2 font-medium'>24/7 hours global support</p>
                    </div>
                    <span className='bg-white rounded-full px-3 py-2'>
                        <i className ="ri-infinity-line text-2xl text-red-700"></i>
                    </span>
                    <div>
                        <p className='text-white text-sm font-medium capitalize text-end'>call us at</p>
                        <a href="tel:9163715178" className='text-2xl text-white capitalize font-bold'>+91 9163715178</a>
                    </div>
                </div>
            </Card>
            <div className="w-1/2 relative">
                <img src="/assets/images/bg.jpg" alt="aproach-image" className='h-[550px] w-full object-cover' />
                <div className="absolute bg-[#00000091] w-full h-full z-10 left-0 top-0 flex justify-center items-center">
                    <span className='border rounded-full px-2 py-1 cursor-pointer bg-white animate-ping'>
                        <i className="ri-play-circle-line text-black text-base"></i>
                    </span>
                </div>
            </div>
            <div className="w-1/2 pe-14">
                <div className="w-[15%] h-[7px] bg-red-700"></div>
                <p className='uppercase text-base font-medium text-white my-4'>why choose us</p>
                <h3 className='capitalize text-white text-4xl'>we create opportunity to reach potential</h3>
                <p className='mt-3 text-white opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, veniam animi! Ipsam accusamus reiciendis qui?</p>
                <div className="flex justify-start items-center gap-5 mt-10">
                    <div className='w-1/2'>
                        <span className="bg-red-700 px-3 py-3.5 rounded-full">
                            <i className="ri-24-hours-line text-white text-2xl"></i>
                        </span>
                        <p className='text-white text-base mt-5 capitalize'>24/7 hours support</p>
                        <p className='text-sm mt-2 opacity-50 text-white capitalize'>we are ready to solve any problems with 100% of accuracy</p>
                    </div>
                    <div className='w-1/2'>
                        <span className="bg-red-700 px-3 py-3.5 rounded-full">
                            <i className="ri-macbook-line text-white text-2xl"></i>
                        </span>
                        <p className='text-white text-base mt-5 capitalize'>digital support</p>
                        <p className='text-sm mt-2 opacity-50 text-white capitalize'>any kind of queries contact with us through our website.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourapproach