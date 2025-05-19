import React from "react";
const FrenchFries_01: React.FC<
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
        d="M7.494 18A2.503 2.503 0 0 0 10 15.5c0-1.38-1.122-2.5-2.506-2.5-.353 0-.69.073-.994.204M7.5 8.5l.5-5L10.6 5M10 9.5 11 2l2.5 1-1 7.5m.5 0L15.5 6h3l-3 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 12.5 5.5 8l3 14z"
      />
    </svg>
  );
};
export default FrenchFries_01;
