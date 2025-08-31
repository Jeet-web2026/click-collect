import { Card, CardContent, CardDescription, CardHeader } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Head } from '@inertiajs/react'

const AdminLogin = () => {
    return (
        <>
            <Head title='Admin Login' />
            <main className='h-svh flex flex-col justify-center items-center bg-black'>
                <section className='w-[500px]'>
                    <Card className='w-full'>
                        <CardContent>
                            <CardHeader className='text-3xl font-bold'>
                                Admin Login
                            </CardHeader>
                            <CardDescription>
                                <Label>Email</Label>
                                <Input />
                            </CardDescription>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </>
    )
}

export default AdminLogin