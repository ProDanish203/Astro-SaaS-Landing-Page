import { testimnialsData } from "../../lib/data";
import { cn } from "../../lib/utils";

export const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimnialsData.map(({ title, name, text, avatar }, index) => (
            <blockquote className={cn(index === 2 && "md:hidden lg:block")}>
              <p className="font-heading text-3xl font-black">
                &ldquo;{text}&rdquo;
              </p>
              <cite className="mt-8 block ">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${avatar})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">{name}</div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
