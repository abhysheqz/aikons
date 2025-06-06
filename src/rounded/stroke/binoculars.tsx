import React from "react";
const Binoculars: React.FC<
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
        d="M21.855 15.5 18.93 5.607A2.26 2.26 0 0 0 16.76 4c-1.285 0-2.312 1.057-2.258 2.324L15 16m7 .5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M10 8h4m-5 8h6M2.145 15.5 5.07 5.607A2.26 2.26 0 0 1 7.24 4c1.284 0 2.31 1.057 2.257 2.324L9 16m0 .5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      />
    </svg>
  );
};
export default Binoculars;
