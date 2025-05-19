import React from "react";
const Cursor_02: React.FC<
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
        d="m2.25 2.25 19.5 7.583-8.667 3.25-3.25 8.667z"
      />
    </svg>
  );
};
export default Cursor_02;
