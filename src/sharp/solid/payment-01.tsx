import React from "react";
const Payment_01: React.FC<
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
        fillRule="evenodd"
        d="M18.25 9.878A2.25 2.25 0 0 0 16.75 12v2.75H16A2.25 2.25 0 0 0 13.75 17v.75h-1.5V17a3.75 3.75 0 0 1 3-3.675V12A3.75 3.75 0 0 1 19 8.25h.75v13.5H5.25v-7.5h1.5v6h11.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 12c0-.98.626-1.813 1.5-2.122v5.872h4.5V2.25H1.25v13.5H14.1l.223-.25A2.24 2.24 0 0 1 16 14.75h.75zM12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Payment_01;
