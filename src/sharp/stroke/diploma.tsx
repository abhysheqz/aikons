import React from "react";
const Diploma: React.FC<
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
        d="M18 18.99h4V3H2v15.99h4M17 6.997H7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 13.993a3 3 0 0 1-3 2.998 2.999 2.999 0 1 1 3-2.998Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.984 13.909v7.08a.01.01 0 0 0 .015.008l3.045-1.522 2.938 1.522a.01.01 0 0 0 .014-.01V13.91"
      />
    </svg>
  );
};
export default Diploma;
