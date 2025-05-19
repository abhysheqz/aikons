import React from "react";
const CircleLockAdd_02: React.FC<
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
        strokeWidth={1.5}
        d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3M16.5 16.667V18m0 0v1.333m0-1.333h1.333M16.5 18h-1.333m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.964 21.982q-.247.018-.498.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"
      />
    </svg>
  );
};
export default CircleLockAdd_02;
