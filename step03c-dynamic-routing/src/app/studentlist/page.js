import Link from "next/link";
    
export default function StudentList() {
  return (   
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Student List Page</h1>
      </div>

      <div
        style={{ position: "absolute", left: "45%", top: "20%", fontSize: 20 }}
      >
        <li>   
          <Link href="/studentlist/Muhammad">Muhamamd</Link>
        </li>
        <li>
          <Link href="/studentlist/iqbal">Iqbal</Link>
        </li>
        <li>
          <Link href="/studentlist/ahmed">Ahmed</Link>
        </li>
        <li>   
          <Link href="/studentlist/ali">Ali</Link>
        </li>
        <li>
          <Link href="/studentlist/ibrahim">Ibrahim</Link>   
        </li>
      </div>
    </>
  );
}
