import React from "react";
const Xsl_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 16v6H20M4 16l2 3m0 0 2 3m-2-3 2-3m-2 3-2 3M14 16h-3.5v3H14v3h-3.5M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Xsl_01;
