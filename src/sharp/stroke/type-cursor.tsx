import React from "react";
const TypeCursor: React.FC<
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
        d="M6 16H1.997l.001-8h4m6 8h10V8H12M6 3h3m3 0H9m0 0v18m0 0H6m3 0h3"
      />
    </svg>
  );
};
export default TypeCursor;
