import React from "react";
const Payment_01: React.FC<
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
        d="M13 15H2V3h20v12h-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 17a3 3 0 0 1 3-3v-2a3 3 0 0 1 3-3v12H6v-6"
      />
    </svg>
  );
};
export default Payment_01;
