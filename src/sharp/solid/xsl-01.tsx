import React from "react";
const Xsl_01: React.FC<
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
        d="M20.75 21.25v1.5h-4.71v-7.5h1.5v6zM7.64 15.25h1.69L7.191 19l2.14 3.208H7.638L6.29 20.352l-1.402 1.856H3.25L5.389 19 3.25 15.25h1.638l1.402 2.398zM15.04 15.25v1.5h-3.5v1.5h3.5v4.5h-5v-1.5h3.5v-1.5h-3.5v-4.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xsl_01;
