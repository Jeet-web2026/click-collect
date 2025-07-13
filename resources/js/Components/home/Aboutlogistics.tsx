import { Button } from '../ui/button'

const Aboutlogistics = () => {
    return (
        <section className="p-14">
            <div className="flex justify-center items-center mb-3">
                <div className="bg-red-700 w-[7%] h-[5px]"></div>
            </div>
            <h2 className='text-center font-bold capitalize text-6xl'>logistics</h2>
            <div className="flex justify-center lg:flex-row flex-col gap-3 px-14 mt-14">
                <div className="w-1/3">
                    <h3 className='capitalize text-4xl font-bold'>we create scope to reach potential</h3>
                    <Button variant="outline" className='mt-10 rounded-full py-5'>
                        <h3 className='text-xl font-medium capitalize'><span className='me-2'><i className="ri-map-pin-line"></i></span>locate us</h3>
                    </Button>
                </div>
                <div className="w-1/3">
                    <p className='text-base capitalize font-medium opacity-75 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minima.</p>
                    <p className='text-base capitalize font-medium opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas voluptatibus nobis error iure tempore minus rem placeat harum quidem blanditiis incidunt, odit natus id nesciunt necessitatibus sint dignissimos maiores!</p>
                </div>
                <div className="w-1/3">
                    <div className="flex items-center justify-between mb-2">
                        <div className='capitalize text-base'>technology</div>
                        <div className='capitalize text-base'>85%</div>
                    </div>
                    <div className="flex items-center">
                        <div className='bg-red-700 w-[85%] h-[8px]'></div>
                        <div className='bg-gray-200 w-[15%] h-[8px]'></div>
                    </div>
                    <div className="flex items-center justify-between mt-8 mb-2">
                        <div className='capitalize text-base'>engineering</div>
                        <div className='capitalize text-base'>75%</div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className='bg-red-700 w-[75%] h-[8px]'></div>
                        <div className='bg-gray-200 w-[25%] h-[8px]'></div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className='capitalize text-base'>shipping</div>
                        <div className='capitalize text-base'>90%</div>
                    </div>
                    <div className="flex items-center">
                        <div className='bg-red-700 w-[90%] h-[8px]'></div>
                        <div className='bg-gray-200 w-[10%] h-[8px]'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutlogistics