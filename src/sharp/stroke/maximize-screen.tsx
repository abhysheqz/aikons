import React from "react";
const MaximizeScreen: React.FC<
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
        d="M2 8v2m12.99-8H8.996m12.99 13V9m-7.993 13h1.998M2 6V2h3.997M17.99 2h3.997v4m0 12v4h-3.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.004 13.04H1.988v8.91q.001.009.01.01h9.006zM11.02 13.065l4.538-4.563m-3.053-.5h3.55v3.503"
      />
    </svg>
  );
};
export default MaximizeScreen;
