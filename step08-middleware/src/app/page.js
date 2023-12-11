"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dynamic Routing | Home Page</h1>

      <button
        onClick={() => router.push("/studentlist")}
        style={{ position: "absolute", left: 580, top: 130, fontSize: 18 }}
      >
        Go to Student List Page</button>
    </div>
  );
}
