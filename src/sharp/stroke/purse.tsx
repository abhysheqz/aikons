import React from "react";
const Purse: React.FC<
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
        strokeWidth={1.5}
        d="M16 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4 20a2 2 0 1 1 0-4c1.105 0 2 1.333 2 2s-.895 2-2 2ZM8 20c-1.105 0-2-1.5-2-2s.895-2 2-2a2 2 0 1 1 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 7h8m0 0h4v13H12m6-13V4H2v10"
      />
    </svg>
  );
};
export default Purse;
