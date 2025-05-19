import React from "react";
const Healtcare: React.FC<
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
        d="M16.272 2.414c-2.196-1.19-3.772.564-3.772.564s-1.576-1.754-3.772-.564C6.07 3.854 5.878 9.496 12.5 12c6.622-2.504 6.43-8.146 3.772-9.586Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 14h3l2.5 1.375h1c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155l.3.749-9 4.5-7-1.98"
      />
    </svg>
  );
};
export default Healtcare;
