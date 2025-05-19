import React from "react";
const EquipmentBenchPress: React.FC<
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
        d="M17.5 3v5m-11-5v5M20 4v1.5m0 0V7m0-1.5h1.5M4 4v1.5m0 0V7m0-1.5H2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 5.5h-11M10 5.5v4m4-4v4M5 16l2.921-5.008A2 2 0 0 1 9.65 10h4.702a2 2 0 0 1 1.728.992L19 16M5 16h14M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 19v2m-8-2v2"
      />
    </svg>
  );
};
export default EquipmentBenchPress;
