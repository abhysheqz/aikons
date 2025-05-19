import React from "react";
const CursorInfo_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17 11.73 2 1.77-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.631 2.327M14 9.99V10m-2-6.002C12 2.894 12.895 2 14 2a1.999 1.999 0 0 1 1.363 3.46C14.757 6.022 14 6.665 14 7.492"
      />
    </svg>
  );
};
export default CursorInfo_01;
