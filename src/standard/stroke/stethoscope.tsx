import React from "react";
const Stethoscope: React.FC<
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
        d="M13.001 2C14.105 2 15 2.931 15 4.08V5a2 2 0 0 1-.8 1.6l-4 3a2 2 0 0 1-2.4 0l-4-3A2 2 0 0 1 3 5v-.92C3 2.93 3.895 2 4.999 2M9 14v3.5a4.5 4.5 0 0 0 9 0V16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.5 6.5-2.38 5.238a1 1 0 0 1-.36.42L8.97 14l-2.735-1.842a1 1 0 0 1-.352-.415L3.5 6.5M21 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.009 13H18"
      />
    </svg>
  );
};
export default Stethoscope;
