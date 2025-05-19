import React from "react";
const Cursor_01: React.FC<
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
        d="M5 19.5 6 2l13 11.5-6.23.898 2.618 6.48L12.61 22l-2.618-6.48z"
      />
    </svg>
  );
};
export default Cursor_01;
