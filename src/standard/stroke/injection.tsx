import React from "react";
const Injection: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 2c0 .415 0 .623.04.82.051.252.15.492.293.707.11.167.258.314.551.608l1.981 1.981c.294.293.44.44.607.55a2 2 0 0 0 .709.294c.196.04.404.04.818.04M17 12l-7.5 7.5-5-5L12 7M11 6l7 7M8 18.637 6 20l-2-2 1.363-2"
      />
      <path
        fill="currentColor"
        d="M13.032 7.414a.75.75 0 1 0 .937 1.172zm2.382 2.617a.75.75 0 0 0 1.172.938zM13.97 8.587l5-4-.937-1.172-5 4zm2.617 2.383 4-5-1.172-.938-4 5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 19-3 3"
      />
    </svg>
  );
};
export default Injection;
