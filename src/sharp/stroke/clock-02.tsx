import React from "react";
const Clock_02: React.FC<
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
        d="M5.5 8.454H2.538C4.338 3.704 9.503 1 14.54 2.344c5.364 1.433 8.55 6.917 7.117 12.25-1.434 5.332-6.945 8.494-12.31 7.061A10.04 10.04 0 0 1 2 13.485"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7v5l2.5 2.5" />
    </svg>
  );
};
export default Clock_02;
