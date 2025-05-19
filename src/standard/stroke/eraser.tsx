import React from "react";
const Eraser: React.FC<
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
        d="M10 22h11M10 8l-6.293 6.293a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 .707.293h2.172a1 1 0 0 0 .707-.293L15.5 13.5M10 8l5.293-5.293a1 1 0 0 1 1.414 0l4.086 4.086a1 1 0 0 1 0 1.414L15.5 13.5M10 8l5.5 5.5"
      />
    </svg>
  );
};
export default Eraser;
