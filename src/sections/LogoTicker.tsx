"use client";
import acmeLogo from "@/assets/logo-acme.png";
import Image from "next/image";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
export default function LogoTicker() {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-5">
          <motion.div
            className="flex gap-14  flex-none pr-14 "
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
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

            {/*  Segundo set de logos de animaciones*/}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
