import Link from "next/link";
import { Login } from "./Login";

export function Navbar() {
    return(
        <div className="flex justify-between">
            <Link href="/"><h3>Eventify</h3></Link>
            <div className="flex justify-between w-[50%]">
            <Link href="/featured"><h3>Featured events</h3></Link>
            <Link href="/dashboard"><h3>Dashboard</h3></Link>
            {/* <Link href="/dashboard"><h3>Docs</h3></Link> */}
            <Login />
            </div>
        </div>
    )
}