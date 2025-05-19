import React from "react";
const Jsx_02: React.FC<
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
        d="M7 16v4.25a1.75 1.75 0 0 1-3.5 0V20m10-4h-3v3h3v3h-3m6-6 2 3m0 0 2 3m-2-3 2-3m-2 3-2 3M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Jsx_02;
