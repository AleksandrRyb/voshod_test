'use client'
import { useRouter } from "next/navigation";
import { Pagination, PaginationProps } from '@mantine/core';

const INITIAL_PAGE = 1;

interface AppPagination  extends PaginationProps {}

const AppPagination: React.FC<AppPagination> = (props) => {
    const router = useRouter();

    const onChange = (page: number) => {
        router.push(`/list/${page || INITIAL_PAGE}`)
    }

    return <Pagination 
        {...props} 
        onChange={onChange} 
    />
}

export default AppPagination;