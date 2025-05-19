import React from "react";
const Sushi_01: React.FC<
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
        d="M12 11.5c-4.25 0-7.51 1.28-10 2.5C2 9 4.423 4 12.039 4S22 9 22 14c-2.46-1.217-5.756-2.5-10-2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13.5v3.264c0 .758.427 1.45 1.13 1.732C6.6 19.09 9.3 20 12 20s5.4-.911 6.87-1.504c.703-.283 1.13-.974 1.13-1.732V13.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 12c0-2.528.887-7.436 6-8M15.004 12c0-1.939.512-5.264 3-7"
      />
    </svg>
  );
};
export default Sushi_01;
