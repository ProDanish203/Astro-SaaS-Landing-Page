import { ActionButton } from "../helpers";

export const Header = () => {
  return (
    <header className="sticky z-40 top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className="">
            <img src="/assets/images/logo.svg" alt="LOGO" className="" />
          </div>
          <div className="flex gap-4 items-center">
            {/* Button */}
            <ActionButton btnText="Get Started" className="max-md:hidden" />
            {/* Hamburger */}
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
