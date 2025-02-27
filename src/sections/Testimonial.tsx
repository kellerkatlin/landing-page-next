import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

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
    text: "Moccapp ha sido una herramienta increíble para mi negocio. He sido capaz de duplicar mis ingresos en menos de una semana.",
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

export const Testimonial = () => {
  return (
    <section className="bg-white ">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonios</div>
        </div>
        <h2 className="section-title mt-5"> Lo que dicen nuestros usuarios</h2>
        <p className="section-description mt-5">
          Desde un pequeño negocio hasta una gran empresa, Moccapp es la
          solución perfecta para gestionar tu stock, ventas y clientes. Con
          Moccapp, puedes gestionar tu stock, ventas y clientes de forma rápida
          y sencilla. Además, Moccapp está conectado a la SUNAT, lo que te
          permite emitir comprobantes electrónicos de forma automática.
        </p>
      </div>
    </section>
  );
};
