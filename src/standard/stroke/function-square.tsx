import React from "react";
const FunctionSquare: React.FC<
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
        d="M8 15.889C8.15 16.42 8.455 17 9.25 17c1.375 0 1.719-1.111 2.75-5s1.375-5 2.75-5c.795 0 1.1.58 1.25 1.111m-5.667 2.5h4.417"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 19.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2z"
      />
    </svg>
  );
};
export default FunctionSquare;
