import React from "react";
const Knife_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.99 20.358a1.918 1.918 0 0 0 2.881-.024l3.426-4.011a1 1 0 0 1 1.468-.058L13 18.5 22.5 8l-4.643-4.643a.5.5 0 0 0-.71.003L3.05 17.728a1.923 1.923 0 0 0-.061 2.63"
      />
    </svg>
  );
};
export default Knife_01;
