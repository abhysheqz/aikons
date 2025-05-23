import React from "react";
const Recycle_03: React.FC<
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
        d="m6 2.5 3 1.223L8 6.5m14 8-2.936 2-1.564-3M7 17.5H3.516V21M17 19.208a8.97 8.97 0 0 1-6 2.292 8.98 8.98 0 0 1-6.861-3.175m8.361-14.7C16.757 4.338 20 8.04 20 12.5c0 1.079-.19 2.113-.538 3.071M2.124 14A9.004 9.004 0 0 1 8 4.012"
      />
    </svg>
  );
};
export default Recycle_03;
