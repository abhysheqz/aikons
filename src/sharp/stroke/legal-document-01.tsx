import React from "react";
const LegalDocument_01: React.FC<
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
        d="M3 2v20h18V2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 10.5 8 14m4-8 4 4-2.5 2.5-4-4z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 18h8" />
    </svg>
  );
};
export default LegalDocument_01;
