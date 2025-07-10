import { Menu } from '@/Components/Menu';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({
}: PageProps<{}>) {

    return (
        <>
            <Head />
            <Menu />
        </>
    );
}
