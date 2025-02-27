import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] pb-24 pt-40 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Regístrate gratis hoy</h2>
          <p className="section-description mt-5">
            Celebre la alegría de sus logros con una aplicación diseñada para
            seguir su progreso y motivar sus esfuerzos.
          </p>
          <Image
            src={starImage}
            alt="Star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="Spring"
            width={360}
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
