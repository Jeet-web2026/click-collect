import { useEffect, useState } from 'react';
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
import Ourbranches from '@/Components/home/Ourbranches';
import Contactus from '@/Components/home/Contactus';
import Blogs from '@/Components/home/Blogs';
import axios from 'axios';
import Footer from '@/Components/essentials/Footer';

export default function Welcome(props: PageProps<{}>) {
    const [data, setData] = useState([]);
    const [partners, setPartners] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogRes = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
                const partnerRes = await axios.get('https://picsum.photos/v2/list');

                setData(blogRes.data);
                setPartners(partnerRes.data);
            } catch (error: any) {
                setError(error.message || 'Unknown error occurred')
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);

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
            <Ourbranches />
            <Contactus />
            <Blogs
                data={data}
                partners={partners}
                loading={loading}
                error={error}
            />
            <Footer />
        </>
    );
}
