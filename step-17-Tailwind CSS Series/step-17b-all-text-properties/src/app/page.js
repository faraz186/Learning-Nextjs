import Link from "next/link";

export default function Home() 
{
  return (

    <>
      <h1 className="uppercase text-3xl text-center text-CMblue">Welcome to Tailwind CSS...</h1>

      <br />
      <br />
      <br />

      <p className="text-2xl italic text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <br />

      <Link className="text-blue-800 font-bold underline underline-offset-2" href="https://www.google.com">Google</Link>
    </>


  )
}
