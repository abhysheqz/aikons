import React from "react";
const Corporate: React.FC<
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
        d="M10.5 2.5h-6a2 2 0 0 0-2 2v17h10v-17a2 2 0 0 0-2-2ZM12.5 8.5h7a2 2 0 0 1 2 2v11h-9z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 16.5h-3m3-4h-3M9 14.5H6m3-4H6m3-4H6"
      />
    </svg>
  );
};
export default Corporate;
