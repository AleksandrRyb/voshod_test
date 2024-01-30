import { List, Flex, ListItem, Button } from '@mantine/core';
import  Link  from 'next/link';
import AppPagination from '@/components/AppPagination'



async function getData(page: string) {
  const res = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page}`);

  if(!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export default async function Page({params}: { params: { page: string }}) {
  const taxyData = await getData(params.page);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap="lg"
      w="100vw"
      h="80vh"
    >
      <List
        spacing="xs"
        listStyleType="none"
      >
        {
           taxyData?.items?.map((item: {id: number, name: string}, index: number)=> {
              return (
                <ListItem key={index}>
                  <Link href={`/item/${String(item.id)}`}>
                    <Button w="120px">{item.name}</Button>
                  </Link>
                </ListItem>
              )
            })
        }
      </List>
     <AppPagination total={taxyData.pages} value={+params.page} />
    </Flex>
  );
}
