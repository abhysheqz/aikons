import React from "react";
const Touch_01: React.FC<
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
        d="M18 22v-2l.999-2.31c.707-1.478 1.674-4.367.322-5.728C17.19 9.817 14.208 9.424 12.5 9.5V3.75a1.75 1.75 0 1 0-3.5 0V14l-2.217-2.329a1.65 1.65 0 0 0-2.414.234 1.78 1.78 0 0 0 .009 2.184L9 19.997V22"
      />
    </svg>
  );
};
export default Touch_01;
