import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import { Menu } from '@/Components/essentials/Menu';
import Ourservicesshort from '@/Components/home/Ourservicesshort';
import { PageProps } from '@/types';
import Serviceslist from '@/Components/home/Serviceslist';
import Ourspecilisation from '@/Components/home/Ourspecilisation';
import Aboutlogistics from '@/Components/Aboutlogistics';

export default function Welcome({
}: PageProps<{}>) {

    return (
        <>
            <Menu />
            <Hero />
            <Ourservicesshort />
            <About />
            <Serviceslist />
            <Ourspecilisation />
            <Aboutlogistics />
        </>
    );
}
