import { Link } from "@inertiajs/react"
import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "../ui/command"
import { Button } from "../ui/button"

export const Menu = () => {
    const [open, setOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    return (
        <header className="fixed top-0 left-0 z-50 w-full shadow-md">
            <nav className={`border-b ${isScrolled ? 'bg-black' : 'bg-[#ffffff45]'} w-full`}>
                <div className="container flex lg:flex-row flex-col px-5 items-center justify-between">
                    <div className="flex items-center lg:flex-row flex-col">
                        <div className="absolute left-0 bg-white h-full w-[150px]" style={{ clipPath: 'polygon(0 0, 75% 0, 95% 100%, 0 100%)', height: '100px' }}
                        ></div>
                        <Link href="/" className="me-8 z-10">
                            <img src="/assets/images/logo.png" alt="web-logo" loading="lazy" className="h-[100px] w-[100px]" />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="me-5">
                                <Link href="/" className="hover:text-[#111] font-medium text-base text-white hover:text-gray-300">Home</Link>
                            </DropdownMenuTrigger>
                            <DropdownMenuTrigger className="text-base outline-none text-white hover:text-gray-300">About Us<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-8 w-48">
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-user-line"></i>About Us</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-eye-line"></i>Our Vission</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-focus-3-line"></i>Our Mission</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-base font-medium cursor-pointer"><i className="ri-service-line"></i>All Activities</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-base outline-none mx-5 text-white hover:text-gray-300">Our Services<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-8 w-48">
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-user-line"></i>About Us</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-eye-line"></i>Our Vission</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-focus-3-line"></i>Our Mission</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-base font-medium cursor-pointer"><i className="ri-service-line"></i>All Services</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-base outline-none me-5 text-white hover:text-gray-300">News</DropdownMenuTrigger>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-base outline-none text-white hover:text-gray-300">Shops<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-8 w-48">
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-user-line"></i>About Us</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-eye-line"></i>Our Vission</DropdownMenuItem>
                                <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-focus-3-line"></i>Our Mission</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-base font-medium cursor-pointer"><i className="ri-service-line"></i>All Services</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center lg:flex-row flex-col">
                        <Link href="" className="text-base font-medium border py-1 px-2 rounded-full">
                            <i className="ri-shopping-cart-2-line text-white"></i>
                        </Link>
                        <span className="mx-3 text-white">|</span>
                        <Button variant="outline" className="bg-transparent rounded-full px-2.5 hover:bg-transparent">
                            <p className="text-muted-foreground text-base text-white">
                                <i className="ri-search-2-line"></i>
                            </p>
                        </Button>
                        <CommandDialog open={open} onOpenChange={setOpen}>
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    <CommandItem>
                                        <Calendar />
                                        <span>Calendar</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <Smile />
                                        <span>Search Emoji</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <Calculator />
                                        <span>Calculator</span>
                                    </CommandItem>
                                </CommandGroup>
                                <CommandSeparator />
                                <CommandGroup heading="Settings">
                                    <CommandItem>
                                        <User />
                                        <span>Profile</span>
                                        <CommandShortcut>⌘P</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <CreditCard />
                                        <span>Billing</span>
                                        <CommandShortcut>⌘B</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <Settings />
                                        <span>Settings</span>
                                        <CommandShortcut>⌘S</CommandShortcut>
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </CommandDialog>
                        <Button variant="outline" className="ms-3 text-base rounded-none border border-transparent hover:bg-white hover:border-red-500 py-5 ms-5 bg-red-700 text-white duration-500 transition ease-in-out hover:text-red-700"><i className="ri-discuss-line"></i>Get a Quote</Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}