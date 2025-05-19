import React from "react";
const Medal_06: React.FC<
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
        d="M10.5 15.5c0-.828.648-1.5 1.446-1.5h.108c.798 0 1.446.672 1.446 1.5s-.648 1.5-1.446 1.5h-.108c-.798 0-1.446-.672-1.446-1.5Z"
      />
      <circle
        cx={12}
        cy={15.5}
        r={6.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 9.5 5.5 2M15 9.5 18.5 2M15 2l-1 2.5M9.5 2l3 6.5"
      />
    </svg>
  );
};
export default Medal_06;
