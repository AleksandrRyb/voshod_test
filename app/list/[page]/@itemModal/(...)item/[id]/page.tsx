import React from 'react';
import AppModal from '@/components/AppModal';

async function getData(id: string) {
    const res = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${id}`);
  
    if(!res.ok) {
      throw new Error("Failed to fetch")
    }
  
    return res.json()
  }

export default async function ItemModal({ params }: { params: { page: string, id: string }}) {
    const data = await getData(params.id);

    return <AppModal name={data.name} text={data.text} path={`/list/${params.page}`}/>
}