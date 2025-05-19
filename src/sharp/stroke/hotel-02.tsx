import React from "react";
const Hotel_02: React.FC<
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
        d="M3.02 6.974V22H21V6.974"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.008 21.999v-6.01h-3.995v6.01M5.517 10.98h1.997m-1.997 3.506h1.997M16.506 10.98h1.997m-1.997 3.506h1.997M10.512 6.974v2.504m0 0v2.505m0-2.505h2.997m0-2.504v2.504m0 0v2.505"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.064 2.95h4.971a.01.01 0 0 1 .01.007l1.952 4.003a.01.01 0 0 1-.009.014h-4.92c-.115-1.891-.909-3.218-2.004-4.023Zm0 0h-.062m.062 0c-1.764-1.295-4.31-1.237-6.07 0m0 0C7.815 3.78 6.99 5.139 6.99 6.974H2.012a.01.01 0 0 1-.01-.015l2.01-4.002a.01.01 0 0 1 .008-.005z"
      />
    </svg>
  );
};
export default Hotel_02;
