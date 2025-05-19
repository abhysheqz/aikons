import React from "react";
const Copy_02: React.FC<
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
        d="M17 8.923V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4.923"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 9a2 2 0 0 1 2 2M11 9a2 2 0 0 0-2 2m11 11a2 2 0 0 0 2-2m-11 2a2 2 0 0 1-2-2m5-11h3m-3 13h3m5-8v3M9 14v3"
      />
    </svg>
  );
};
export default Copy_02;
