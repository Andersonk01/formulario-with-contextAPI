import React from "react";
import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <header>
      <ul className="text-white flex items-center w-full justify-center bg-sky-500">
        <li className="bg-sky-800 p-2 text-sm rounded m-3 cursor-pointer shadow-md hover:bg-blue-600 hover:scale-110">
          <Link href="/form">Formulario</Link>
        </li>
        <li className="bg-sky-800 p-2 text-sm rounded m-3 cursor-pointer shadow-md hover:bg-blue-600 hover:scale-110">
          <Link href="/presentation">Apresentacao</Link>
        </li>
      </ul>
    </header>
  );
};
