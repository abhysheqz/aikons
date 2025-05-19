import React from "react";
const Building_06: React.FC<
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
        d="M7.5 6.01h3m-3 3.01 3-.02m-3 3.01h3M11 22v-5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.03 22H3V4a2 2 0 0 1 2-2h8.03a2 2 0 0 1 2 2v4.005m0 13.995H21V10.005a2 2 0 0 0-2-2h-3.97m0 13.995V8.005"
      />
    </svg>
  );
};
export default Building_06;
