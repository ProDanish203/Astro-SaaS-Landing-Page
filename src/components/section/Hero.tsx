import { ActionButton, Circle, Hexagon } from "../helpers";

export const Hero = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Backforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl text-center mt-4 max-w-3xl mx-auto lg:text-7xl">
          The Future Of Blockchain Is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          Backforge is a decentralized platform that enables developers to
          create, deploy, and manage blockchain applications.
        </p>
        <div className="flex justify-center mt-10">
          <ActionButton btnText="Get Started" />
        </div>
        {/* Image Container */}
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            {/* Hexagon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            {/* Cube Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <img
                  src="/assets/images/cube.png"
                  alt="Cube 3D Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            {/* Cuboid Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            {/* Torus Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <img
                  src="/assets/images/torus.png"
                  alt="Torus 3D Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            {/* Shadow Image */}
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image Shadow"
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
            />
            {/* Main Image */}
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image"
              className="w-[500px] "
            />
          </div>
        </div>

        {/* Scroll Button */}
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
