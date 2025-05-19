import React from "react";
const Diaper: React.FC<
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
        d="M22 4H2v6c0 5.523 4.477 10 10 10s10-4.477 10-10z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8h5M2 8h5M14.5 19.5v-1a7 7 0 0 1 7-7M9.5 19.5v-1a7 7 0 0 0-7-7"
      />
    </svg>
  );
};
export default Diaper;
