"use client";
import { IFormData } from "@/app/form/page";
import React, { createContext } from "react";

interface IDevContextData {
  data: IFormData;
  setContextData: React.Dispatch<React.SetStateAction<IFormData>>;
}

interface IProps {
  children: React.ReactNode;
}

const DevContext = createContext({} as IDevContextData);

function ComponentContext({ children }: IProps) {
  const [contextData, setContextData] = React.useState<IFormData>({
    nome: "",
    linguagem: "",
    techs: "",
    github: "",
    linkedin: "",
    experiencia: "",
    isactive: false,
  });

  return (
    <DevContext.Provider value={{ data: contextData, setContextData }}>
      {children}
    </DevContext.Provider>
  );
}

export { DevContext, ComponentContext };
