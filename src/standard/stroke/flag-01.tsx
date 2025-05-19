import React from "react";
const Flag_01: React.FC<
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
        d="M5 20.997v-4.993m0 0V3.012a.01.01 0 0 1 .014-.009l13.392 5.738a.3.3 0 0 1 .016.544z"
      />
    </svg>
  );
};
export default Flag_01;
