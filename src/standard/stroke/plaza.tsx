import React from "react";
const Plaza: React.FC<
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
        d="m2 22 20-.013M20 22V10.478L13 7M7 10.006l2-.01m-2 4.007 2-.01M7 18l2-.01M4 22V5.829L13 2v20"
      />
    </svg>
  );
};
export default Plaza;
