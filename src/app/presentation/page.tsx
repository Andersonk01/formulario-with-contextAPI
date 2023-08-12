"use client";

import { useContext } from "react";
import { DevContext } from "@/DevContext";

export default function Presentation() {
  const { data } = useContext(DevContext);

  return (
    <div className="bg-gray-100 p-8 w-full h-full">
      <h1 className="text-2xl font-semibold mb-4 mt-10">
        Apresentação - {data.nome}
      </h1>

      {!data.isactive ? (
        <></>
      ) : (
        <p className="p-8 font-sans text-lg text-gray-800 border border-gray-400 rounded-xl">
          Olá, sou <strong>{data.nome}</strong>
          {`, um entusiasta da tecnologia com paixão pela inovação e desenvolvimento. Minhas habilidades abrangem ${data.techs}, evidenciadas em projetos no GitHub (${data.github}). Com experiência em ${data.experiencia}, estou ansioso para contribuir em equipes inovadoras e aprender continuamente. Conecte-se comigo no LinkedIn (${data.linkedin}) para explorarmos oportunidades juntos. Vamos construir um futuro tecnológico emocionante!`}
        </p>
      )}
      <h2 className="text-gray-600 font-medium text-xl mb-4 mt-10">
        Informações do Desenvolvedor
      </h2>

      <table className="w-full p-3 flex justify-center items-center ">
        <tbody className="w-screen max-w-screen-sm space-x-0 ">
          <tr className="flex flex-wrap bg-gray-300">
            <td className="font-semibold  p-4 w-full sm:w-auto">Nome:</td>
            <td className=" p-4 w-full sm:w-auto">{data.nome}</td>
          </tr>

          <tr className="flex flex-wrap">
            <td className="font-semibold p-4 w-full sm:w-auto">
              Linguagem de Preferida:
            </td>
            <td className="p-4 w-full sm:w-auto">{data.linguagem}</td>
          </tr>

          <tr className="flex flex-wrap bg-gray-300">
            <td className="font-semibold p-4 w-full sm:w-auto">Tecnologias:</td>
            <td className=" p-4 w-full sm:w-auto">{data.techs}</td>
          </tr>

          <tr className="flex flex-wrap">
            <td className="font-semibold p-4 w-full sm:w-auto">
              Perfil do GitHub:
            </td>
            <td className="p-4 w-full sm:w-auto">{data.github}</td>
          </tr>

          <tr className="flex flex-wrap bg-gray-300">
            <td className="font-semibold  p-4 w-full sm:w-auto">
              Perfil do LinkedIn:
            </td>

            <td className="p-4 w-full sm:w-auto">{data.linkedin}</td>
          </tr>

          <tr className="flex flex-wrap">
            <td className="font-semibold p-4 w-full sm:w-auto">Experiência:</td>
            <td className="p-4 w-full sm:w-auto">{data.experiencia}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
