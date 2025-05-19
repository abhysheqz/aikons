import React from "react";
const Shuffle: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 6a1 1 0 0 1 1-1h3.917a3 3 0 0 1 2.512 1.361l6.317 9.685a1 1 0 0 0 .837.454H21a1 1 0 0 1 .78 1.625l-2 2.5a1 1 0 1 1-1.56-1.25l.7-.875h-2.337a3 3 0 0 1-2.512-1.361L7.754 7.454A1 1 0 0 0 6.917 7H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 18a1 1 0 0 0 1 1h3.93a3 3 0 0 0 2.496-1.336l1.406-2.11a1 1 0 0 0-1.664-1.109l-1.406 2.11A1 1 0 0 1 6.93 17H3a1 1 0 0 0-1 1m11.486-8.143a1 1 0 0 0 1.371-.342l.918-1.53a1 1 0 0 1 .857-.485H21a1 1 0 0 0 .78-1.625l-2-2.5a1 1 0 0 0-1.56 1.25l.7.875h-2.288a3 3 0 0 0-2.572 1.457l-.918 1.529a1 1 0 0 0 .344 1.371"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shuffle;
