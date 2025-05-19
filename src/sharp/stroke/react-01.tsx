import React from "react";
const React_01: React.FC<
  {
    size?: number | string | undefined;
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
        d="M3 3v18h18V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14h.01M18 17.5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 18.5V13h3M11.996 15.483h3.506c0-.602.149-1.72-.926-2.263-.893-.451-1.58-.06-1.837.097-.624.496-.774.934-.743 2.166Zm0 0c0 .599-.097 1.616.784 2.205.896.6 1.851.14 2.202-.219"
      />
    </svg>
  );
};
export default React_01;
