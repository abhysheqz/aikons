import React from "react";
const Dumbbell_03: React.FC<
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
        d="M6.5 3.5v7m11-7v7M6.5 13.5v7m11-7v7M4 7H2.5M20 7h1.5m-15 0h11M4 17H2.5M20 17h1.5m-15 0h11M4 5v4m16-4v4M4 15v4m16-4v4"
      />
    </svg>
  );
};
export default Dumbbell_03;
