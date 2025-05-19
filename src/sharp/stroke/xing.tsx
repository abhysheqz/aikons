import React from "react";
const Xing: React.FC<
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
        d="M7.008 6.025A.01.01 0 0 0 7 6.018H3.022a.01.01 0 0 0-.01.014l2.016 4.978L3.006 16a.01.01 0 0 0 .01.013h3.99a.01.01 0 0 0 .01-.006l1.993-4.996zM20.99 1.999H16.02a.01.01 0 0 0-.009.005l-6.006 13.031 4 6.961a.01.01 0 0 0 .009.006l4.997-.042a.01.01 0 0 0 .008-.015l-4.027-6.91 6.006-13.022a.01.01 0 0 0-.01-.014Z"
      />
    </svg>
  );
};
export default Xing;
