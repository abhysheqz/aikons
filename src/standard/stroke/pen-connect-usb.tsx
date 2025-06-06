import React from "react";
const PenConnectUsb: React.FC<
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
        d="M2.987 2h1.45a1 1 0 0 1 .865.498l1.164 2.005M5.013 7h1.314a1 1 0 0 0 .927-.623l.762-1.874M2 4.503l8.01-.003m0 0c0 .558.455 1.042 1.001 1.042S12 5.058 12 4.5c0-.559-.443-1.04-.989-1.04s-1 .481-1 1.04M17 8l3 3m-1.594-4.383L7.964 17.058a4.96 4.96 0 0 0-1.305 2.306L6 22l2.636-.66a4.96 4.96 0 0 0 2.306-1.304L21.383 9.594a2.106 2.106 0 0 0-2.977-2.977"
      />
    </svg>
  );
};
export default PenConnectUsb;
