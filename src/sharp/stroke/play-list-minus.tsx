import React from "react";
const PlayListMinus: React.FC<
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
        d="M2 6h18M16 2l-3 4M9 2 6 6M20 14V2H2v18h10"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14 17h8" />
    </svg>
  );
};
export default PlayListMinus;
