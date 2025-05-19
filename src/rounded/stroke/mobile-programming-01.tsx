import React from "react";
const MobileProgramming_01: React.FC<
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
        d="M5 8c.01-2.644.108-4.059 1.024-4.975C7.049 2 8.699 2 11.999 2s4.95 0 5.975 1.025c.916.916 1.013 2.33 1.023 4.975M5 16c.01 2.644.108 4.059 1.024 4.975C7.049 22 8.699 22 11.999 22s4.95 0 5.975-1.025c.916-.916 1.013-2.33 1.023-4.975"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 19h2M16 10l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 14M8 10l-1.227 1.057C6.258 11.502 6 11.724 6 12s.258.498.773.943L8 14M13 9l-2 6"
      />
    </svg>
  );
};
export default MobileProgramming_01;
