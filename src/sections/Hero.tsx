export default function Hero() {
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ">
            La versión 2.0 ya está aquí
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">
            Camino hacia la productividad{" "}
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
            Celebre la alegría de los logros con una aplicación diseñada para
            seguir su progreso, motivar sus esfuerzos y celebrar sus éxitos.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn"> Comienza Gratis</button>
            <button className="btn">Aprende más </button>
          </div>
        </div>
      </div>
    </section>
  );
}
