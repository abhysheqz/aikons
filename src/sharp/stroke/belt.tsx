import React from "react";
const Belt: React.FC<
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
        d="M6 6v12h4a6 6 0 0 0 0-12z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 7.5h4m-4 9h4m8-9h8m-8 9h8M4 12h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12h.009"
      />
    </svg>
  );
};
export default Belt;
