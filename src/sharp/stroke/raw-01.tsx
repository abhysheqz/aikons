import React from "react";
const Raw_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M4 22v-2.5m0 0V16h2.25a1.75 1.75 0 1 1 0 3.5M4 19.5h2.25m0 0L7.5 22M16 16v6h.116L18 20l1.869 2H20v-6M14 22l-1.5-6h-1L10 22m1-2.5h2"
      />
    </svg>
  );
};
export default Raw_01;
