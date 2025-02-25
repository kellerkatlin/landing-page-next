import acmeLogo from "@/assets/logo-acme.png";
import Image from "next/image";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export default function LogoTicker() {
  return (
    <div className="">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-5">
          <div className="flex gap-14 flex-none ">
            <Image
              src={acmeLogo}
              alt="Acme logo"
              className="logo-ticker-image"
              width={100}
              height={100}
            />
            <Image
              src={echoLogo}
              alt="Echo logo"
              className="logo-ticker-image"
              width={100}
              height={100}
            />
            <Image
              src={celestialLogo}
              alt="Celestial logo"
              className="logo-ticker-image"
              width={100}
              height={100}
            />
            <Image
              src={pulseLogo}
              alt="Pulse logo"
              className="logo-ticker-image"
              width={100}
              height={100}
            />
            <Image
              src={apexLogo}
              alt="Apex logo"
              className="logo-ticker-image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
