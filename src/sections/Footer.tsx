import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="Logo" height={50} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">Accerca de </a>
          <a href="">Características</a>

          <a href="">Clientes</a>
          <a href="">Precios</a>
          <a href="">Ayuda</a>
          <a href="">Carreras</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialPin />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 Moccapp, Inc. Todos lods derechos reservados.{" "}
        </p>
      </div>
    </footer>
  );
}
