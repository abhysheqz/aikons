import React from "react";
const LayoutTable_01: React.FC<
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
        d="M9 1.5V8h6V1.5zM7 1.5V8H1.5V5.5a4 4 0 0 1 4-4zM1.5 10v8.5a4 4 0 0 0 4 4H7V10zM9 22.5h6V10H9zM17 22.5h1.5a4 4 0 0 0 4-4V10H17zM22.5 8V5.5a4 4 0 0 0-4-4H17V8z"
      />
    </svg>
  );
};
export default LayoutTable_01;
