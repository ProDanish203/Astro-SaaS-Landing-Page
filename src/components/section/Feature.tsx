import { Card } from "../helpers";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revoulutionary Blockchain API",
    description:
      "Blockforge is a decentralized platform that enables developers to create, deploy, and manage blockchain applications.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Powerful Smart Contracts",
    description:
      "Unlock the potential of blockchain with our powerful smart contract technology.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Secure Wallet Integration",
    description:
      "Safely store and manage your digital assets with our secure wallet integration.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Scalable Infrastructure",
    description:
      "Build and scale your blockchain applications with our highly scalable infrastructure.",
    color: "violet",
  },
];

export const Feature = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto">
          Discover the future of Blockchain with Blockforge
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((card, idx) => (
              <Card color={card.color} className="max-w-xs md:max-w-md">
                {/* Image */}
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    {/* Shadow for Image */}
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="size-40 user-select-none group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">
                  {card.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-4">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="fl  ex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map((_, index) => (
              <div
                key={index}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
