import AppPagination from '@/components/pagination/Pagination'

async function getTaxyData(page: string) {
  const res = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page}`)

  console.log("Page number", page)

  if(!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export default async function Home({ params }: { params: { page: string }}) {
  const taxyData = await getTaxyData(params.page);


  return (
    <main>
     <AppPagination total={taxyData.pages} value={+params.page} />
    </main>
  );
}
