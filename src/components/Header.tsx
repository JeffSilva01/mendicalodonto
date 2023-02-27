import Image from "next/image";

import medicalOdontoLogo from "@/assets/logo.jpg";

export function Header() {
  return (
    <header className="w-full h-20">
      <div className="max-w-7xl h-full m-auto flex items-center justify-between">
        <Image src={medicalOdontoLogo} alt="Logo Medical Odonto" />
        <nav className="flex gap-8 text-green-700">
          <a href="#">AGENDAMENTO</a>
          <a href="#">NOSSA HISTÓRIA</a>
          <a href="#">FOTOS</a>
          <a href="#">CRC</a>
          <a href="#">UNIDADES</a>
        </nav>
      </div>
    </header>
  );
}
