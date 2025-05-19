import React from "react";
const Limitation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 10.5 18 5"
      />
      <circle
        cx={12}
        cy={12}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 18.999 18.001 21A9.99 9.99 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.99 9.99 0 0 0 3.999 8L8 18.999"
      />
    </svg>
  );
};
export default Limitation;
