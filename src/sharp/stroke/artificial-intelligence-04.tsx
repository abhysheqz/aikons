import React from "react";
const ArtificialIntelligence_04: React.FC<
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
        d="M19.5 4.5h-15v15h15z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2v2.5M16 2v2.5M12 2v2.5m-4 15V22m4-2.5V22m4-2.5V22m6-6h-2.5m-15-8H2m2.5 8H2m2.5-4H2m20-4h-2.5m2.5 4h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m7.948 15.771 2.536-7.234 2.553 7.234m-4.11-2.79h3.126m3.935-4.75v7.424"
      />
    </svg>
  );
};
export default ArtificialIntelligence_04;
