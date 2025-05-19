import React from "react";
const Towels: React.FC<
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
        d="M6.5 5H17a2 2 0 0 1 2 2v9h-2M6.5 5A1.5 1.5 0 0 0 5 6.5V8h3M6.5 5A1.5 1.5 0 0 1 8 6.5V8m-3 2.5V20h12v-4M8 8v8h9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4v4h-3M2 4v4h3"
      />
    </svg>
  );
};
export default Towels;
