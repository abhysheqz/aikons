import React from "react";
const Typescript_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 14h2m0 0h2m-2 0v5m7.5-5h-3v2.5h3V19h-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 22H4V2h9l7 7v2m-7-8.5V9h6.5"
      />
    </svg>
  );
};
export default Typescript_03;
