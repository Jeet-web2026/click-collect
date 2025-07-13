import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import { Menu } from '@/Components/essentials/Menu';
import Ourservicesshort from '@/Components/home/Ourservicesshort';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import Serviceslist from '@/Components/home/Serviceslist';
import Ourspecilisation from '@/Components/home/Ourspecilisation';

export default function Welcome({
}: PageProps<{}>) {

    return (
        <>
            <Head />
            <Menu />
            <Hero />
            <Ourservicesshort />
            <About />
            <Serviceslist />
            <Ourspecilisation />
        </>
    );
}
