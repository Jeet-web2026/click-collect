import { DropdownMenu } from '@/Components/ui/dropdown-menu';
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import React, { Children, PropsWithChildren } from 'react'

const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
    const user = usePage().props.auth?.user;
    return (
        <>
            <nav className='flex justify-between items-center shadow-lg px-10 py-5'>
                <Link href={route('dashboard')}>
                    {user ? <h2 className='capitalize font-medium text-xl'>{user.name}</h2> : <p>Oops! you are not logged in.</p>}
                </Link>
                <DropdownMenu>
                    
                </DropdownMenu>
            </nav>
            {children}
        </>
    )
}

export default AuthenticatedLayout
