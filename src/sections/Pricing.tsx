import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Gratis",
    monthlyPrice: 0,
    buttonText: "Comienza gratis",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "2GB de almacenamiento",
      "Integraciones",
      "Soporte básico",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Regístrate ahora",
    popular: true,
    inverse: true,
    features: [
      "Hasta 50 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "50GB de almacenamiento",
      "Integraciones",
      "Soporte prioritario",
      "Soporte avanzado",
      "Soporte de exportación",
    ],
  },
  {
    title: "Negocios",
    monthlyPrice: 19,
    buttonText: "Regístrate ahora",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "200GB de almacenamiento",
      "Integraciones",
      "Gerente de cuenta dedicado",
      "Campos personalizados",
      "Análisis avanzados",
      "Capacidades de exportación",
      "Acceso a la API",
      "Funciones avanzadas de seguridad",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Precios</h2>
          <p className="section-description mt-5">
            Gratis para siempre. Actualízate para obtener tareas ilimitadas,
            mayor seguridad y funciones exclusivas.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center ">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    S/.{monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50 ",
                      inverse === true && "text-white/60"
                    )}
                  >
                    /mes
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8 ">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
