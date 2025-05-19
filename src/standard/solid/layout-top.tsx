import React from "react";
const LayoutTop: React.FC<
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
        fill="currentColor"
        d="M1.5 10v8.5a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V10zM22.5 8V5.5a4 4 0 0 0-4-4h-13a4 4 0 0 0-4 4V8z"
      />
    </svg>
  );
};
export default LayoutTop;
