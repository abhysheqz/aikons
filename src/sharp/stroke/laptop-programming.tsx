import React from "react";
const LaptopProgramming: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M20 14.5v-12H4v12" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 21.5 2.02-7h15.932l2.048 7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.995 6.498 2 2-2 2M9 6.5l-2 2 2 2M13 6l-2.005 4.997"
      />
    </svg>
  );
};
export default LaptopProgramming;
