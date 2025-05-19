import React from "react";
const Oval: React.FC<
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
        d="M22 12c0 4.97-4.477 9-10 9S2 16.97 2 12s4.477-9 10-9 10 4.03 10 9Z"
      />
    </svg>
  );
};
export default Oval;
