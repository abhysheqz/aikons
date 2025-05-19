import React from "react";
const Hugeicons: React.FC<
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
        d="M2 9.5h20M20.5 9.5h-17l1.172 9.372A3 3 0 0 0 7.648 21.5h8.704a3 3 0 0 0 2.976-2.628zM5 9c0-3.59 3.134-6.5 7-6.5s7 2.91 7 6.5"
      />
    </svg>
  );
};
export default Hugeicons;
