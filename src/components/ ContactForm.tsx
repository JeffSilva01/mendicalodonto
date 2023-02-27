"use client";
import React from "react";
import { MapPin, User, WhatsappLogo } from "phosphor-react";
import { Select } from "./SelectDemo";

export function ContactForm() {
  return (
    // Tudo: remover border
    <form className="flex flex-col w-fit border bg-white p-8 rounded">
      <h2 className="text-green-700">Agende uma consulta</h2>
      <div className="flex items-center justify-center gap-4">
        <div className="grid grid-flow-col grid-rows-2 items-center border border-gray-300 rounded px-3 py-1 gap-x-4">
          <User
            size={32}
            className="row-span-2 bg-green-300 p-1 rounded-full text-green-700"
          />
          <label htmlFor="name" className="">
            Name Completo
          </label>
          <input className="h-6" type="text" name="name" />
        </div>
        <div className="grid grid-flow-col grid-rows-2 items-center border border-gray-300 rounded px-3 py-1 gap-x-6 relative">
          <MapPin
            size={32}
            className="row-span-2 bg-green-300 p-1 rounded-full text-green-700"
          />
          <label htmlFor="location" className="">
            Localizacão
          </label>
          <Select />
        </div>
        <button className="flex gap-6 items-center justify-center p-3 px-8 bg-blue-700 text-white rounded">
          <WhatsappLogo size={32} weight="fill" />
          Quero Agendar
        </button>
      </div>
    </form>
  );
}
