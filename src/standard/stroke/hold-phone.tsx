import React from "react";
const HoldPhone: React.FC<
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
        d="m8 18 4 2.5 1 1.5m8-2-2-4c0-1.698.367-4.266-.422-5.845-.334-.666-.578-1.341-.578-2.1V4a3 3 0 0 0-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.01 15-.01.982A2 2 0 0 0 7.004 18h5.992A2 2 0 0 0 15 16V4c0-1.105-.897-2-2.004-2H7.004A2 2 0 0 0 5 4.018L5.01 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.25 7.5h1.5a1.25 1.25 0 1 0 0-2.5h-1.5a1.25 1.25 0 1 0 0 2.5Zm0 0h2.5a1.25 1.25 0 1 1 0 2.5h-2.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1.5a1.25 1.25 0 1 1 0 2.5h-1.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1a1.25 1.25 0 1 1 0 2.5h-1a1.25 1.25 0 1 1 0-2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 15h.009"
      />
    </svg>
  );
};
export default HoldPhone;
