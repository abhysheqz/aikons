import React from "react";
const AiInnovation_01: React.FC<
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
        d="M19 5h-6v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 11v2m3-2v2m-3-10v2m3-2v2M13 6.5h-2m2 3h-2m10-3h-2m2 3h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 2C6.582 2 3 5.545 3 9.919c0 1.493.417 2.89 1.143 4.081"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 16H6l1 3h8zM14 19l-1 3H9l-1-3"
      />
    </svg>
  );
};
export default AiInnovation_01;
