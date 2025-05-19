import React from "react";
const BedSingle_01: React.FC<
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
        d="M22 17H2M22 21v-9H2v9M15 12V9H9v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 12V6c-2.266-1.89-5.024-3-8-3S6.266 4.11 4 6v6"
      />
    </svg>
  );
};
export default BedSingle_01;
