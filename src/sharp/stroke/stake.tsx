import React from "react";
const Stake: React.FC<
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
        d="M8.006 6c3.312 0 5.997-.895 5.997-2s-2.685-2-5.997-2c-3.313 0-5.998.895-5.998 2s2.685 2 5.998 2ZM15.502 9a6.5 6.5 0 0 0-6.497 6.5c0 3.59 2.909 6.5 6.497 6.5A6.5 6.5 0 0 0 22 15.5c0-3.59-2.91-6.5-6.498-6.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.503 15.5 2.819-1.645m-2.82 1.645-2.752-1.606m2.753 1.606v3.275m2.999-5.025-3-1.75-2.998 1.75v3.5L15.503 19l2.999-1.75zM7.772 10.022C4.458 10.022 2 9.094 2 8.1m12-1V3.901m-12 0v8.132c0 .806 1.76 1.645 4.196 1.874"
      />
    </svg>
  );
};
export default Stake;
