import React from "react";
const Background: React.FC<
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
        d="M21.5 2.5h-19v19h19zM3 21 21 3M2.999 15.501 15.5 3m-7 18L21 8.5M14 21l7-7M2.999 10 10 3"
      />
    </svg>
  );
};
export default Background;
