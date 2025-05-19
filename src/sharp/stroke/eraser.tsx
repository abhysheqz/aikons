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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.49 22.002h11.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.464 8.014-6.961 6.934a.01.01 0 0 0 0 .014l3.995 4.023h4.03l4.992-4.99M9.464 8.015 15.445 2a.01.01 0 0 1 .014 0l6.036 5.99a.01.01 0 0 1 0 .015l-5.975 5.99M9.464 8.014l6.056 5.982"
      />
    </svg>
  );
};
export default Eraser;
