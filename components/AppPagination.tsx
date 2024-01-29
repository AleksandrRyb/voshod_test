'use client'
import { useRouter } from "next/navigation";
import { Pagination, PaginationProps } from '@mantine/core';

const INITIAL_PAGE = 1;

interface AppPagination  extends PaginationProps {}

export default function AppPagination(props: AppPagination) {
    const router = useRouter();

    const onChange = (page: number) => {
        router.push(`/list/${page || INITIAL_PAGE}`)
    }

    return <Pagination 
        {...props}
        onChange={onChange} 
    />
}