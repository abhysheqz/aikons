import React from "react";
const Tornado_01: React.FC<
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
        strokeWidth={1.5}
        d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4 8 1.79 8 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 14c0 1.657-2.686 3-6 3s-6-1.343-6-3 2.686-3 6-3M16 19c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2"
      />
    </svg>
  );
};
export default Tornado_01;
