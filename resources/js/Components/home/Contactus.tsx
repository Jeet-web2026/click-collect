import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

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
                <Card className="shadow-lg border-0 bg-red-700 rounded-sm p-5 w-3/4 ms-auto">
                    <CardContent>
                        <h3 className="text-3xl capitalize font-bold text-white mb-5 mt-3">get touch with us!</h3>
                        <form action="" method="post" className="w-full">
                            <input type="text" placeholder="Enter your full name here" className="w-full rounded-sm placeholder:text-gray-500" />
                            <div className="flex lg:flex-row flex-col items-center mt-3">
                                <input type="email" placeholder="Enter your email here" className="w-full me-1 rounded-sm placeholder:text-gray-500" />
                                <input type="tel" placeholder="Enter your contact number" className="w-full ms-1 rounded-sm placeholder:text-gray-500" />
                            </div>
                            <div className="flex lg:flex-row flex-col items-center mt-3">
                                <input type="text" placeholder="Enter your skype id" className="w-full rounded-sm placeholder:text-gray-500" />
                            </div>
                            <div className="flex lg:flex-row flex-col items-center mt-3">
                                <textarea name="" id="" placeholder="Enter your details here" className="w-full rounded-sm placeholder:text-gray-500"></textarea>
                            </div>
                            <Button variant="outline" className="capitalize font-medium mt-5 text-lg rounded-sm px-5">
                                send<i className="ri-send-plane-line"></i>
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Contactus