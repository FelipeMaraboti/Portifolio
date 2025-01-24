import { Link, Outlet } from "react-router-dom";

import { Header } from "../components/header";
import { useState } from "react";

export function Layout() {

  const [selectedItem, setSelectedItem] = useState('')

  function handleSelect(item: string) {
    setSelectedItem(item)
  }

  return (
    <div className='px-60 md:px-32 sm:px-10 bg-[url("/Tela.svg")] h-auto min-h-screen w-screen bg-no-repeat overflow-hidden bg-cover'>
      <Header />
      <section className='pt-32 flex max-w-8xl w-auto h-auto'>
        <aside className='h-72 mb-32 w-52 bg-transparent'>
          <ul className='flex flex-col  text-zinc-500 gap-6 py-5'>
            <li
              onClick={() => handleSelect("sobre")}
              className={`w-32 ml-4 ${selectedItem === "sobre" && "text-md border-b-[1px] border-zinc-50 text-zinc-50 pl-2"}`}
            >
              <Link to="/sobre">Sobre Mim</Link>
            </li>
            <li
              onClick={() => handleSelect("hard")}
              className={`w-32 ml-4 ${selectedItem === "hard" && "text-md border-b-[1px] border-zinc-50 text-zinc-50 pl-2"}`}
            >
              <Link to="/hard">Hard Skills</Link>
            </li>
            <li
              onClick={() => handleSelect("soft")}
              className={`w-32 ml-4 ${selectedItem === "soft" && "text-md border-b-[1px] border-zinc-50 text-zinc-50 pl-2"}`}
            >
              <Link to="/soft">Soft Skills</Link>
            </li>
            <li
              onClick={() => handleSelect("projetos")}
              className={`w-32 ml-4 ${selectedItem === "projetos" && "text-md border-b-[1px] border-zinc-50 text-zinc-50 pl-2"}`}
            >
              <Link to="/projetos">Projetos</Link>
            </li>
          </ul>
        </aside>
        <Outlet />
      </section>
    </div>
  )
}