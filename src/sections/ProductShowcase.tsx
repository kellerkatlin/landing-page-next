import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Aumenta tu productividad</div>
          </div>
          <h2 className="section-title mt-5">
            Una forma más eficaz de seguir el progreso
          </h2>
          <p className="section-description mt-5  ">
            Convierta sin esfuerzo sus ideas en un sitio web SaaS totalmente
            funcional y responsivo en solo minutos con esta plantilla
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10 " />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
}
