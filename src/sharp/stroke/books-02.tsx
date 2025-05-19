import React from "react";
const Books_02: React.FC<
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
        d="M3 3h11a3 3 0 1 1 0 6H3M3 9h15a3 3 0 1 1 0 6h-5m-6 0H3M3 21h12a3 3 0 1 0 0-6h-2M3 15h4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 9v8l3-2.5 3 2.5V9" />
    </svg>
  );
};
export default Books_02;
