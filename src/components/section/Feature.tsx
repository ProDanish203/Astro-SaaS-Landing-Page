import { useEffect, useState } from "react";
import { cardData } from "../../lib/data";
import { cn } from "../../lib/utils";
import { Card } from "../helpers";

export const Feature = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCard((prev) => (prev + 1) % cardData.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [selectedCard, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto">
          Discover the future of Blockchain with Blockforge
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCard}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
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
                  <p className="text-lg text-zinc-400 mt-4">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="fl  ex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  index === selectedCard && "bg-zinc-300"
                )}
                onClick={() => setSelectedCard(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
