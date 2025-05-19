import React from "react";
const Xls_01: React.FC<
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
        d="M14.75 21.25v1.5h-4.71v-7.5h1.5v6zM7.657 15.25H9.33L7.191 19l2.14 3.208H7.656L6.29 20.352l-1.44 1.856h-1.6L5.389 19 3.25 15.25h1.6l1.44 2.398zM20.75 15.25v1.5h-3.5v1.5h3.5v4.5h-5v-1.5h3.5v-1.5h-3.5v-4.5z"
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
export default Xls_01;
