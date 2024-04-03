"use client";
import { useRouter } from "next/navigation";

export default function StudentDetails({ params }) {
  const router = useRouter();
  console.log(params);

  return (  
    <div>
      <h1 style={{ textAlign: "center" }}>Student Details</h1>

      <h3 style={{ textAlign: "center", marginTop: 50 }}>
        <i>Hello Mr. {params.student}</i>
      </h3>

      <button
        onClick={() => router.push("/studentlist")}
        style={{ position: "absolute", left: 600, top: 180 }}
      >
        Back to Student List Page
      </button>
    </div>
  );
}
