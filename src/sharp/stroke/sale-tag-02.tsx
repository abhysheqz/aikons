import React from "react";
const SaleTag_02: React.FC<
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
        d="M18.999 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10a1.48 1.48 0 0 0-2.091-.018c-.573.572-.602 1.175.165 1.94s.854 1.444.113 2.183c-.74.74-1.552.522-2.187-.112m4-3.994L15 9m-1 1c.395.394.525.951.39 1.447M10 13.993 9 15m1-1.007a1.68 1.68 0 0 1-.506-1.329"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 2H11.994a.1.1 0 0 0-.071.03l-9.894 9.92a.1.1 0 0 0 0 .141l9.889 9.88a.1.1 0 0 0 .14 0l9.913-9.94a.1.1 0 0 0 .029-.07z"
      />
    </svg>
  );
};
export default SaleTag_02;
