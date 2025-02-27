import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Moccapp es, sin lugar a dudas, la mejor plataforma de landing pages que he utilizado. El retorno de la inversión que he obtenido ha sido incalculable. ",
    imageSrc: avatar1.src,
    name: "Morgan S.",
    username: "@morgan_s",
  },
  {
    text: "Como diseñador, siempre estoy buscando nuevas formas de mejorar mi flujo de trabajo. Con Landkit, puedo crear prototipos de alta fidelidad en minutos.",
    imageSrc: avatar2.src,
    name: "Ana B.",
    username: "@ana_b",
  },
  {
    text: "Moccapp ha sido una herramienta increíble para mi negocio. He sido capaz de duplicar mis ingresos en menos de una semana.",
    imageSrc: avatar3.src,
    name: "Luis R.",
    username: "@luis_r",
  },
  {
    text: "Moccapp es, sin lugar a dudas, la mejor plataforma de landing pages que he utilizado. El retorno de la inversión que he obtenido ha sido incalculable. ",
    imageSrc: avatar4.src,
    name: "Morgan S.",
    username: "@morgan_s",
  },
  {
    text: "Como diseñador, siempre estoy buscando nuevas formas de mejorar mi flujo de trabajo. Con Landkit, puedo crear prototipos de alta fidelidad en minutos.",
    imageSrc: avatar5.src,
    name: "Ana B.",
    username: "@ana_b",
  },
  {
    text: "El retorno de la inversión que he obtenido ha sido incalculable. ",
    imageSrc: avatar6.src,
    name: "Luis R.",
    username: "@luis_r",
  },
  {
    text: "Moccapp es, sin lugar a dudas, la mejor plataforma de landing pages que he utilizado. El retorno de la inversión que he obtenido ha sido incalculable. ",
    imageSrc: avatar7.src,
    name: "Morgan S.",
    username: "@morgan_s",
  },
  {
    text: "Como diseñador, siempre estoy buscando nuevas formas de mejorar mi flujo de trabajo. Con Landkit, puedo crear prototipos de alta fidelidad en minutos.",
    imageSrc: avatar8.src,
    name: "Ana B.",
    username: "@ana_b",
  },
  {
    text: "Moccapp ha sido una herramienta increíble para mi negocio. He sido capaz de duplicar mis ingresos en menos de una semana.",
    imageSrc: avatar9.src,
    name: "Luis R.",
    username: "@luis_r",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
      <div className="card" key={text}>
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonial = () => {
  return (
    <section className="bg-white ">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonios</div>
          </div>
          <h2 className="section-title mt-5">Lo que dicen nuestros usuarios</h2>
          <p className="section-description mt-5">
            Desde un pequeño negocio hasta una gran empresa, Moccapp es la
            solución perfecta para gestionar tu stock, ventas y clientes. Con
            Moccapp, puedes gestionar tu stock, ventas y clientes de forma
            rápida y sencilla. Además, Moccapp está conectado a la SUNAT, lo que
            te permite emitir comprobantes electrónicos de forma automática.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
