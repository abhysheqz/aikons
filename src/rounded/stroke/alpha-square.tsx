import React from "react";
const AlphaSquare: React.FC<
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
        strokeWidth={1.5}
        d="M15.001 8c.107.864 0 2.232-.4 3.828-.346 1.14-1.439 4.429-4.277 4.153-2.452-.324-3.479-2.724-3.305-4.297.066-1.32 1.052-3.648 3.678-3.684 2.358.204 2.958 2.208 3.291 3.9.36 1.56.32 2.329.92 3.397.36.588 1.04.804 1.586.66.44-.18.506-.564.506-.852"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
    </svg>
  );
};
export default AlphaSquare;
