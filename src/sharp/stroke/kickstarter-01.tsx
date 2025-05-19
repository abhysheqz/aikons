import React from "react";
const Kickstarter_01: React.FC<
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
        d="M4.002 20.99V3.01a.01.01 0 0 1 .01-.01h6.022a.01.01 0 0 1 .01.01l-.136 7.007c0 .01.011.014.017.007l6.088-7.016a.01.01 0 0 1 .014-.001l3.968 3.464a.01.01 0 0 1 .001.013l-4.526 5.46 4.526 5.527a.01.01 0 0 1 0 .013l-3.946 3.51a.01.01 0 0 1-.015-.002l-5.973-6.947a.01.01 0 0 0-.017.006v6.939a.01.01 0 0 1-.01.01H4.012a.01.01 0 0 1-.01-.01Z"
      />
    </svg>
  );
};
export default Kickstarter_01;
