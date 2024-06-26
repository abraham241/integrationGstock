import Sidebar from "@/components/Sidebar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div>
        <Link href="/testcomponent" >
        Mes acahts
        </Link> 
      </div>
    </main>
  );
}
