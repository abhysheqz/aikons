import React from "react";
const Desk: React.FC<
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
        d="M3 8v8h18V8M17 8V2H7v6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 16v6m14-6v6M8 16v4m8-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 8h20"
      />
    </svg>
  );
};
export default Desk;
