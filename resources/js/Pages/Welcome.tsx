import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import { Menu } from '@/Components/essentials/Menu';
import Ourservicesshort from '@/Components/home/Ourservicesshort';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({
}: PageProps<{}>) {

    return (
        <>
            <Head />
            <Menu />
            <Hero />
            <Ourservicesshort />
            <About />
        </>
    );
}
