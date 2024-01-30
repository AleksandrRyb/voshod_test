'use client'
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

export default function AppModal(
    { name, text, path }: {name: string, text: string, path?: string}
) 
{
    const router = useRouter();
    const [opened, { close }] = useDisclosure(true);

    const onClose = () => {
        close();
        if(path) {
            return router.push(path)
        }
        router.back();
    } 

    return <Modal content={text} opened={opened} title={name} onClose={onClose} />
}