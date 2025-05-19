import React from "react";
const ThreeFinger_02: React.FC<
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
        fill="currentColor"
        d="M10.766 10.354c.234 0 .425-.19.425-.425V2.582a1.33 1.33 0 1 1 2.66 0v8.303a.425.425 0 0 0 .85 0V4.302a1.303 1.303 0 1 1 2.606 0v7.779a.375.375 0 0 0 .75 0V9.75a2.75 2.75 0 0 1 2.694 2.75v4.096a4.75 4.75 0 0 1-1.04 2.968l-.96 1.198V22a.75.75 0 0 1-.75.75h-10a.75.75 0 0 1-.75-.75v-1.257l-3.243-4.458a3.96 3.96 0 0 1 .594-5.309l2.321-2.03v4.67a.425.425 0 0 0 .85 0V4.245a1.284 1.284 0 1 1 2.568 0v5.684c0 .235.19.425.425.425"
      />
    </svg>
  );
};
export default ThreeFinger_02;
