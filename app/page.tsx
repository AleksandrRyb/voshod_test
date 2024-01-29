async function getTaxyData() {
  const res = await fetch("https://taxivoshod.ru/testapi/?w=list&page=1")

  if(!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export default async function Home() {
  const taxyData = await getTaxyData();

  console.log(taxyData);

  return (
    <main>
     <h1>Hello World</h1>
    </main>
  );
}
