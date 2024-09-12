import type { CollectionEntry } from "astro:content";
import { ActionButton, Card, Tag } from "../helpers";
import { cn, getPostColorFromCategory } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LatestBlogs = ({
  latestPosts,
}: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates, and insights in the
            blockchain industry.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, index) => (
                <Card
                  key={index}
                  btnText="Learn More"
                  color={getPostColorFromCategory(category)}
                  className={cn((index === 1 || index === 3) && "md:hidden")}
                >
                  <div key={index} className="">
                    <Tag
                      tag={category}
                      color={getPostColorFromCategory(category)}
                    />
                    <h3 className="font-heading font-black text-3xl mt-3">
                      {title}
                    </h3>
                    <p className="text-lg text-zinc-400 mt-6">{description}</p>
                  </div>
                </Card>
              )
            )}
          </div>

          <motion.div
            className="max-sm:hidden flex flex-col gap-8 mt-16"
            style={{
              marginTop,
            }}
            ref={targetRef}
          >
            {latestPosts.map(
              ({ data: { title, description, category } }, index) => (
                <Card
                  key={index}
                  btnText="Learn More"
                  color={getPostColorFromCategory(category)}
                  className={cn((index === 0 || index === 2) && "md:hidden")}
                >
                  <div key={index} className="">
                    <Tag
                      tag={category}
                      color={getPostColorFromCategory(category)}
                    />
                    <h3 className="font-heading font-black text-3xl mt-3">
                      {title}
                    </h3>
                    <p className="text-lg text-zinc-400 mt-6">{description}</p>
                  </div>
                </Card>
              )
            )}
          </motion.div>
        </div>

        <div className="flex justify-center mt-32">
          <ActionButton btnText="Read The Blog" />
        </div>
      </div>
    </section>
  );
};
