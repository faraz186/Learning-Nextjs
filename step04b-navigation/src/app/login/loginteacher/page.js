"use client";
import { useRouter } from "next/navigation";

export default function LoginTeacher() {
  const router = useRouter();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Login Teacher Page</h1>
      <br />

      <button onClick={() => router.push("/login")}>Go to Login Page</button>

      <br />
      <br />

      <button onClick={() => router.push("/")}>Go to Home Page</button>

      <br />
      <br />

      <button onClick={() => router.push("/login/loginteacher")}>
        Go to Login Teacher Page
      </button>

      <br />
      <br />
      <button onClick={() => router.push("/about/aboutcollege")}>
        Go to About College Page
      </button>
    </div>
  );
}
