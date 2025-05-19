import React from "react";
const Rhombus_01: React.FC<
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
        fillRule="evenodd"
        d="M10.763 2.177a1.75 1.75 0 0 1 2.474 0l8.586 8.586a1.75 1.75 0 0 1 0 2.475l-8.586 8.585a1.75 1.75 0 0 1-2.475 0l-8.585-8.586a1.75 1.75 0 0 1 0-2.475z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rhombus_01;
