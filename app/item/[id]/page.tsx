import React from 'react';
import ItemModal from '@/app/list/[page]/@itemModal/(...)item/[id]/page';
import ListPage from '@/app/list/[page]/page';

export default async function Page({ params }: { params: { id: string, page: string }}) {

    const listPageParams = {...params, page: "1"}

    return (
      <>
        <ListPage params={listPageParams} />
        <ItemModal params={listPageParams}/>
      </>
    )
}