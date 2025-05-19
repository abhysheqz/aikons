import React from "react";
const Magnet_02: React.FC<
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
        d="M16 10V7h4v3m-4 0v4a4 4 0 0 1-8 0v-4m8 0h4m0 0v4a8 8 0 1 1-16 0v-4m4 0V7H4v3m4 0H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m12.5 2-1.875 3h3L11.75 8"
      />
    </svg>
  );
};
export default Magnet_02;
