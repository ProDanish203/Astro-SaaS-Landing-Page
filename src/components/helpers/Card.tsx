import { cn } from "../../lib/utils";

export const Card = ({
  color,
  className,
  btnText,
  children,
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
  btnText?: string;
}) => {
  return (
    <div className={cn("relative z-0 p-8 md:p-10 group", className)}>
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
      <div>{children}</div>
      <div className="flex justify-between mt-12 gap-x-8">
        <button
          className={cn(
            "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
            color === "lime" && "text-lime-500",
            color === "cyan" && "text-cyan-500",
            color === "violet" && "text-violet-500"
          )}
        >
          {btnText || "Learn More"}
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
