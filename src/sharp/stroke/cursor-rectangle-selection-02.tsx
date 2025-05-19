import React from "react";
const CursorRectangleSelection_02: React.FC<
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
        d="m9.5 9.5 12 4.667-5.333 2-2 5.333z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 9v3M12 2.5H9m0 16h.5m9-13.5V2.5H16M2.5 5V2.5H5m0 16H2.5V16m16-6.5V9"
      />
    </svg>
  );
};
export default CursorRectangleSelection_02;
