import Link from "next/link";
export default function Home() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-4xl">hello this is home page</h1>
      <Link href={"/videogallery"}>go to video</Link>
    </main>
  );
}
