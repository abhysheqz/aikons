import React from "react";
const Contact_01: React.FC<
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
        d="M4 2h18v20H4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 17h8a4 4 0 0 0-8 0ZM15 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6H2m4 6H2m4 6H2"
      />
    </svg>
  );
};
export default Contact_01;
