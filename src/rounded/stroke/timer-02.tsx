import React from "react";
const Timer_02: React.FC<
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
        strokeWidth={1.5}
        d="M2 22h11a9 9 0 1 0 0-18c-4.633 0-8.503 3.5-9 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 5.5 1-1m-14 0 1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m16.5 9-2.94 2.94m0 0a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.122-2.122Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 3.5V2M10.5 2h4M2 15h3M2 19h5"
      />
    </svg>
  );
};
export default Timer_02;
