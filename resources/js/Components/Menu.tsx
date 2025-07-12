import { Link } from "@inertiajs/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
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
} from "./ui/command"
import { Button } from "./ui/button"

export const Menu = () => {
    const [open, setOpen] = React.useState(false)

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
        <nav className="fixed z-10 top-0 left-0 w-full bg-white shadow-md">
            <div className="container flex lg:flex-row flex-col px-5 items-center justify-between">
                <div className="flex items-center lg:flex-row flex-col">
                    <Link href="/" className="me-8">
                        <img src="/assets/images/logo.png" alt="web-logo" loading="lazy" className="h-[100px] w-[100px] bg-white" />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="me-5">
                            <Link href="/" className="hover:text-[#111] font-medium text-base">Home</Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuTrigger className="text-base outline-none">About Us<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-8 w-48">
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-user-line"></i>About Us</DropdownMenuItem>
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-eye-line"></i>Our Vission</DropdownMenuItem>
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-focus-3-line"></i>Our Mission</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-base font-medium cursor-pointer"><i className="ri-service-line"></i>All Activities</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base outline-none mx-5">Our Services<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-8 w-48">
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-user-line"></i>About Us</DropdownMenuItem>
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-eye-line"></i>Our Vission</DropdownMenuItem>
                            <DropdownMenuItem className="text-base cursor-pointer"><i className="ri-focus-3-line"></i>Our Mission</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-base font-medium cursor-pointer"><i className="ri-service-line"></i>All Services</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base outline-none me-5">News</DropdownMenuTrigger>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base outline-none">Shops<i className="ri-arrow-down-s-line ms-2"></i></DropdownMenuTrigger>
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
                    <Link href="" className="text-base font-medium border py-1 px-2.5 rounded-full">
                        <i className="ri-shopping-cart-2-line"></i>
                    </Link>
                    <span className="mx-3">|</span>
                    <Button variant="outline">
                        <p className="text-muted-foreground text-sm">
                        Press{" "}
                        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                            <span className="text-xs">⌘</span>F
                        </kbd>
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
                    <Button variant="outline" className="ms-3 text-base">Get a Quote</Button>
                </div>
            </div>
        </nav>
    )
}