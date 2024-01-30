import React from 'react';
import AppModal from '@/components/AppModal';
import ListPage from '@/app/list/[page]/page';

async function getData(id: string) {
    const res = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${id}`);
  
    if(!res.ok) {
      throw new Error("Failed to fetch")
    }
  
    return res.json()
  }

export default async function Page({ params }: { params: { id: string, page: string }}) {
    const data = await getData(params.id);

    const listPageParams = {...params, page: "1"}

    return (
      <>
        <ListPage params={listPageParams} />
        <AppModal name={data.name} text={data.text} path={'/list/1'}/>
      </>
    )
}