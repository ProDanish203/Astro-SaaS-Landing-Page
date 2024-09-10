import { ActionButton } from "../helpers";

const listItems = [
  "Experience unparalleled performance with our high-speed network",
  "Highly scalable infrastructure for your applications",
  "Secure and reliable wallet integration",
  "24/7 support from our team of experts",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of Blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Discover the future of Blockchain with Blockforge and build and
                scale your blockchain applications with our highly scalable
                infrastructure.
              </p>

              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-8 mt-12">
                <ActionButton btnText="Get Started" />
                <button className="text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500">
                  Learn More
                </button>
              </div>
            </div>

            <div className="max-md:hidden">
              <div className="relative inline-flex z-0">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D Image"
                  className="size-96 max-w-none"
                />

                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative max-md:hidden">
              <div className="absolute right-0 z-0">
                <img
                  src="/assets/images/cone.png"
                  alt="Cone 3D Image"
                  className="size-96 max-w-none rotate-12"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Image"
                  className="absolute top-3/4 -z-10 left-0"
                />
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p className="">
                  Blockforge is a leading provider of blockchain technology,
                  offering a wide range of services to help you build and scale
                  your blockchain applications.
                </p>
                <p className="">
                  With secure and reliable wallet integration, 24/7 support from
                  our team of experts, and a commitment to innovation,
                  Blockforge is the perfect partner for your blockchain needs.
                  Discover the future of Blockchain with Blockforge today.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <ActionButton btnText="Get Started" />
                <button className="text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
