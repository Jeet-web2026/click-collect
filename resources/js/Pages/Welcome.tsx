import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import { Menu } from '@/Components/essentials/Menu';
import Ourservicesshort from '@/Components/home/Ourservicesshort';
import { PageProps } from '@/types';
import Serviceslist from '@/Components/home/Serviceslist';
import Ourspecilisation from '@/Components/home/Ourspecilisation';
import Aboutlogistics from '@/Components/home/Aboutlogistics';
import Ourapproach from '@/Components/home/Ourapproach';
import Ourteam from '@/Components/home/Ourteam';
import Serviceinfo from '@/Components/home/Serviceinfo';

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
            <Ourapproach />
            <Ourteam />
            <Serviceinfo />
        </>
    );
}
