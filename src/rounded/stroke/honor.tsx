import React from "react";
const Honor: React.FC<
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
        d="M2.5 3.001h19M4.5 3.001V14c0 2.329.43 3.09 2.428 4.288l3.014 1.808c1.003.602 1.504.903 2.058.903s1.055-.301 2.058-.903l3.015-1.808C19.069 17.089 19.5 16.328 19.5 14V3.001M14.5 13.001h-5m5-5h-5"
      />
    </svg>
  );
};
export default Honor;
