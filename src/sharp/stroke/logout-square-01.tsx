import React from "react";
const LogoutSquare_01: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 12h7.428M13 9l3 3-3 3"
      />
    </svg>
  );
};
export default LogoutSquare_01;
