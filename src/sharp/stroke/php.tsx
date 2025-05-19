import React from "react";
const Php: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21V3H3v18z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.75 12V9.5H7A1.25 1.25 0 1 1 7 12zm0 0v3m10-3V9.5H17a1.25 1.25 0 1 1 0 2.5zm0 0v3m-5-6v3m0 0v3m0-3h2.5m0-3v3m0 0v3"
      />
    </svg>
  );
};
export default Php;
