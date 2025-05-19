import React from "react";
const WSchools_3: React.FC<
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
        d="M6 8H2l6 10 4.5-7 4.5 7 2-3.5L15 8h-5l-2 3zM19 6h3l-2 2h.5a1.5 1.5 0 0 1 0 3c-.653 0-1.294-.417-1.5-1"
      />
    </svg>
  );
};
export default WSchools_3;
