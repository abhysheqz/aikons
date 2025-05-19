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
        d="M12 20c3.5 0 8-5.706 8-10.159C20 4.644 16.57 1.983 12 2c-4.572.017-8 2.644-8 7.841C4 14.294 8.5 20 12 20Z"
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
