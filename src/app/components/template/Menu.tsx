import Link from "next/link";
import { IconHome,IconUser } from "@tabler/icons-react";
import MenuItem from "./MenuItem";


  export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-900 bg-zih-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icone={IconHome} texto='Inicio' url='/' />
                <MenuItem icone={IconUser} texto='Cadastro Usuário' url='/usuarios' />
            </nav>

        </aside>
    )

  } 