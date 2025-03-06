"use client";  
import { useRouter } from "next/navigation";                  
  
export default function About() {  
  const router = useRouter();

  const navigation = (route) => {  
    router.push(route);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>About Page</h1>
      <br />

      <button onClick={() => navigation("/login")}>Go to Login Page</button>  

      <br />
      <br />

      <button onClick={() => navigation("/")}>Go to Home Page</button>

      <br />  
      <br />

      <button onClick={() => navigation("/login/loginteacher")}>
        Go to Login Teacher Page
      </button>

      <br />
      <br />
      <button onClick={() => navigation("/about/aboutcollege")}>
        Go to About College Page
      </button>
    </div>
  );
}
