import React from "react";
const Triangle_03: React.FC<
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
        d="M3 21V3l18 18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.024 9.068 3.543 3.501m.426-2.565v2.986h-3m-3.076-6.004L11.429 3.43m2.567-.415-2.986-.012-.012 3m6.046.969 3.523-3.542m.438 2.572-.025-2.986-3.001.025"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.367 8a1.37 1.37 0 1 1-2.738 0 1.37 1.37 0 0 1 2.738 0Z"
      />
    </svg>
  );
};
export default Triangle_03;
