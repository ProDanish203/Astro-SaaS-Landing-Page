import { cn } from "../../lib/utils";

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
              <FeatureCard
                key={idx}
                image={card.image}
                title={card.title}
                description={card.description}
                color={card.color}
              />
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

const FeatureCard = ({
  image,
  title,
  description,
  color,
}: {
  image: string;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group">
      {/* Corner */}
      <div
        className={cn(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500",
          color === "cyan" && "bg-cyan-500",
          color === "violet" && "bg-violet-500"
        )}
      ></div>
      <div
        className={cn(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 group-hover:bg-fuchsia-400 transition duration-300",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
          color === "violet" && "bg-lime-500 group-hover:bg-violet-400"
        )}
      ></div>
      {/* Cut corner */}
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      {/* Image */}
      <div className="flex justify-center -mt-28">
        <div className="inline-flex relative">
          {/* Shadow for Image */}
          <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
          <img
            src={image}
            alt={title}
            className="size-40 user-select-none group-hover:-translate-y-6 transition duration-300"
          />
        </div>
      </div>
      <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
      <p className="text-lg text-zinc-400 mt-4">{description}</p>
      <div className="flex justify-between mt-12">
        <button
          className={cn(
            "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
            color === "lime" && "text-lime-500",
            color === "cyan" && "text-cyan-500",
            color === "violet" && "text-violet-500"
          )}
        >
          Learn More
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-zinc-500 cursor-pointer group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:-translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
