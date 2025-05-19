import React from "react";
const FencingMask: React.FC<
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
        d="M12 20c3.5 0 8-5.706 8-10.159 0-5.197-3.43-7.858-8-7.84-4.572.016-8 2.643-8 7.84 0 4.454 4.5 10.16 8 10.16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 8c3.5 2 11.5 2 15 0M4.5 13c3.5 2 11.5 2 15 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 16c0 2.4-1 4.8-3 6M18 16c0 2.4 1 4.8 3 6"
      />
    </svg>
  );
};
export default FencingMask;
