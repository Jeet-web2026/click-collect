import About from '@/Components/About';
import Hero from '@/Components/Hero';
import { Menu } from '@/Components/Menu';
import Ourservicesshort from '@/Components/Ourservicesshort';
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
