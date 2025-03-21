import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export default function Header() {
  return (
    <header className="top-0 sticky backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Optimice su flujo de trabajo y aumente su productividad
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Comenzar Gratis </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" width={40} height={40}></Image>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center ">
              <a href="#">Acerca de</a>
              <a href="#">Características</a>
              <a href="#">Clientes</a>
              <a href="#">Actualizaciones</a>
              <a href="#">Ayuda</a>
              <button className="btn">Comenzar Gratis</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
