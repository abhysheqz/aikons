import React from "react";
const WasteRestore: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.749 4.984H9.38m0 0L11.82 2h6.542a.1.1 0 0 1 .095.071l.884 2.913m-9.96 0h9.96m-.008-.027.008.027m0 0h2.41M19.449 4.99l-.447 6.515M5.043 4.99 6.06 21.824a.1.1 0 0 0 .099.094h4.162"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M18.932 16.022c-.668-1.185-1.931-2.046-3.353-2.046-1.842 0-3.319 1.576-3.789 3.36l-1.496-2.863m1.966 5.518c.697 1.156 1.914 2.05 3.345 2.007 2.256-.068 3.116-1.482 3.835-3.42l1.375 2.886"
      />
    </svg>
  );
};
export default WasteRestore;
