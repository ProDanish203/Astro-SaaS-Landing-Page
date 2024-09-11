import React from "react";
import { ActionButton, Circle, Hexagon } from "../helpers";

export const CTA = () => {
  return (
    <section className="py-56 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[420px]">
              <img
                src="/assets/images/cuboid.png"
                alt="Cuboid 3D Image"
                className="size-[140px]"
              />
            </Circle>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <img
                src="/assets/images/cylinder.png"
                alt="Cylinder 3D Image"
                className="size-[140px]"
              />
            </Circle>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Join thousands of satisfied customers who have transformed their
            workflow with our innovative solutions.
          </p>
          <div className="flex justify-center mt-12">
            <ActionButton btnText="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};
