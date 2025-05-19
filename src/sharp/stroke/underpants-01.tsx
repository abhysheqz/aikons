import React from "react";
const Underpants_01: React.FC<
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
        strokeWidth={1.5}
        d="M8.484 15.004s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.984 8.004h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.999 17.059 14.99 20H22L20 4H3.983L2 20h6.982l1.029-3.061"
      />
    </svg>
  );
};
export default Underpants_01;
