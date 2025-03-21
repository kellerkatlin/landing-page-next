"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] pb-24 pt-40 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Regístrate gratis hoy</h2>
          <p className="section-description mt-5">
            Celebre la alegría de sus logros con una aplicación diseñada para
            seguir su progreso y motivar sus esfuerzos.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star"
            width={360}
            style={{ translateY }}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            src={springImage.src}
            alt="Spring"
            width={360}
            style={{ translateY }}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center ">
          <button className="btn btn-primary">Consíguelo gratis</button>
          <button className="btn btn-text gap-1">
            <span>Aprende más </span>
            <ArrowRight className="h-5 w-5 " />
          </button>
        </div>
      </div>
    </section>
  );
}
