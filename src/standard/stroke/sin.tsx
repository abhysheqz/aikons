import React from "react";
const Sin: React.FC<
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
        d="M10 7h2m2 0h-2m2 10h-2m-2 0h2m0-10v10M22 7v10L17 7v10M6.5 8.5A2.19 2.19 0 0 0 4.419 7h-.094A2.325 2.325 0 0 0 2 9.325V9.5A2.5 2.5 0 0 0 4.5 12 2.5 2.5 0 0 1 7 14.5v.175A2.325 2.325 0 0 1 4.675 17h-.094A2.19 2.19 0 0 1 2.5 15.5"
      />
    </svg>
  );
};
export default Sin;
