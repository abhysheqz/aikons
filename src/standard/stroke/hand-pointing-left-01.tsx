import React from "react";
const HandPointingLeft_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 18h-2l-2.31.999c-1.478.707-4.367 1.674-5.728.322C9.817 17.19 9.424 14.208 9.5 12.5H3.75a1.75 1.75 0 1 1 0-3.5H14l-2.329-2.217a1.65 1.65 0 0 1 .234-2.414 1.78 1.78 0 0 1 2.184.009L19.997 9H22"
      />
    </svg>
  );
};
export default HandPointingLeft_01;
