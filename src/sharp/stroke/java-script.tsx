import React from "react";
const JavaScript: React.FC<
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
        d="M17.732 13A2 2 0 0 0 16 12h-.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H16a2 2 0 0 1-1.732-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.747 11.255v4.357c0 .573-.19 1.827-1.205 2.232-1.075.429-2.014 0-2.544-.848"
      />
    </svg>
  );
};
export default JavaScript;
