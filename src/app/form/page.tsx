"use client";
import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { DevContext } from "@/DevContext";

export interface IFormData {
  nome: string;
  linguagem: string;
  techs: string;
  github: string;
  linkedin: string;
  experiencia: string;
  isactive: boolean;
}

const DevForm: React.FC = () => {
  const initialFormData: IFormData = {
    nome: "",
    linguagem: "",
    techs: "",
    github: "",
    linkedin: "",
    experiencia: "",
    isactive: false,
  };

  const [formData, setFormData] = useState<IFormData>(initialFormData);
  // context
  const { setContextData } = useContext(DevContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // isactive é definido como true para que o desenvolvedor seja exibido
    formData.isactive = true;
    //enviando os dados para o contexto
    setContextData(formData);
    // Após o envio, redefina os campos para seus valores iniciais
    setFormData(initialFormData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">
          Formulário de Desenvolvedor
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 p-2 border rounded w-full"
              required
              onChange={handleChange}
              value={formData.nome}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linguagem"
              className="block text-sm font-medium text-gray-700"
            >
              Linguagem Preferida:
            </label>
            <input
              type="text"
              id="linguagem"
              name="linguagem"
              className="mt-1 p-2 border rounded w-full"
              required
              onChange={handleChange}
              value={formData.linguagem}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="techs"
              className="block text-sm font-medium text-gray-700"
            >
              Tecnologias:
            </label>
            <input
              type="text"
              id="techs"
              name="techs"
              className="mt-1 p-2 border rounded w-full"
              required
              onChange={handleChange}
              value={formData.techs}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-700"
            >
              Perfil do GitHub:
            </label>
            <input
              type="text"
              id="github"
              name="github"
              className="mt-1 p-2 border rounded w-full"
              onChange={handleChange}
              value={formData.github}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700"
            >
              Perfil do LinkedIn:
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              className="mt-1 p-2 border rounded w-full"
              onChange={handleChange}
              value={formData.linkedin}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="experiencia"
              className="block text-sm font-medium text-gray-700"
            >
              Experiência:
            </label>
            <textarea
              id="experiencia"
              name="experiencia"
              rows={4}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleChange}
              value={formData.experiencia}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-110"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default DevForm;
