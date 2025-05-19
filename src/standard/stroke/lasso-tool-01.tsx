import React from "react";
const LassoTool_01: React.FC<
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
        d="M17.3 15.512c3.042-2.532 5.348-5.553 4.535-8.582-1.05-3.913-6.3-5.908-11.727-4.456-5.426 1.451-8.974 5.8-7.924 9.713.853 3.177 3.704 4.788 8.166 4.233m6.95-.908c-1.384-3.988-7.582-2.696-7.298 0 .21 1.999 4.928 1.999 7.298 0m0 0c.827 2.784-1.055 5.934-4.343 6.488"
      />
    </svg>
  );
};
export default LassoTool_01;
