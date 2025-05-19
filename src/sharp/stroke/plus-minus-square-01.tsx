import React from "react";
const PlusMinusSquare_01: React.FC<
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
        d="M12 7.5v6.364m3.5-3.182h-7m7 5.818h-7M3 21h18V3H3z"
      />
    </svg>
  );
};
export default PlusMinusSquare_01;
