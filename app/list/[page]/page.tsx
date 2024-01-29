import { List, Flex, ListItem, Button } from '@mantine/core';
import AppPagination from '@/components/AppPagination'



async function getTaxyData(page: string) {
  const res = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page}`);

  if(!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export default async function Home({ params }: { params: { page: string }}) {
  const taxyData = await getTaxyData(params.page);

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
           taxyData?.items?.map((item: any, index: number)=> {
              return (
                <ListItem key={index}>
                  <Button w="120px">{item.name}</Button>
                </ListItem>
              )
            })
        }
      </List>
     <AppPagination total={taxyData.pages} value={+params.page} />
    </Flex>
  );
}
