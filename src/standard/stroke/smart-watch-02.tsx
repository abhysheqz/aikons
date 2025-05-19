import React from "react";
const SmartWatch_02: React.FC<
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
        d="M15 7H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 7 .84-4.196A1 1 0 0 1 10.32 2h3.36a1 1 0 0 1 .98.804L15.5 7M8.5 17l.84 4.196a1 1 0 0 0 .98.804h3.36a1 1 0 0 0 .98-.804L15.5 17"
      />
    </svg>
  );
};
export default SmartWatch_02;
