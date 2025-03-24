import Link from "next/link";
import { IconHome } from "@tabler/icons-react";

function MenuItem(){
    return(
        <Link href="/">
            <IconHome/>
            <span>Inicio</span>
        </Link>
    )
}
  export default function Menu() {
    return (
        <aside className="w-72">
            <nav className="flex flex-col">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </nav>

        </aside>
    )

  } 