import React from "react";
const RotateSquare: React.FC<
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
        d="m9.5 4.5 1.086-1.086a2 2 0 0 1 2.828 0l7.172 7.172a2 2 0 0 1 0 2.828l-7.172 7.172a2 2 0 0 1-2.828 0l-7.172-7.172a2 2 0 0 1 0-2.828L6.5 7.5H3"
      />
    </svg>
  );
};
export default RotateSquare;
