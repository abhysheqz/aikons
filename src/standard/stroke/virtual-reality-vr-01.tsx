import React from "react";
const VirtualRealityVr_01: React.FC<
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
        d="M16 13h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12v-.919a4 4 0 0 1 .545-2.015L4.92 4.992A2 2 0 0 1 6.65 4H17.35a2 2 0 0 1 1.728.992l2.376 4.074A4 4 0 0 1 22 11.08V12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3.095a3 3 0 0 1-2.304-1.08L12 17l-1.6 1.92A3 3 0 0 1 8.095 20H5a3 3 0 0 1-3-3Z"
      />
    </svg>
  );
};
export default VirtualRealityVr_01;
