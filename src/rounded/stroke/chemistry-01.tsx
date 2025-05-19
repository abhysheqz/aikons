import React from "react";
const Chemistry_01: React.FC<
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
        d="M3 9h8m9 0h-3M17 4v10.786C17 16.56 15.657 18 14 18s-3-1.44-3-3.214V4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M10 4h8"
      />
    </svg>
  );
};
export default Chemistry_01;
