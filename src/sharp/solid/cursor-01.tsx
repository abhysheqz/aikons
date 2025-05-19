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
        fill="currentColor"
        d="M5.625 1.25 19.75 13.793l-6.199 1.33 2.65 5.67-3.974 1.957-2.79-5.898L4.25 20.25z"
      />
    </svg>
  );
};
export default Cursor_01;
