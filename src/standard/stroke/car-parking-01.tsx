import React from "react";
const CarParking_01: React.FC<
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
        d="M2 7h20M22 21V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16M16 19v2m-8-2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 14 .621-2.485A2 2 0 0 1 10.061 10h3.877a2 2 0 0 1 1.94 1.515L16.5 14M16 14H8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2M9 16.5v.01m6-.01v.01"
      />
    </svg>
  );
};
export default CarParking_01;
