import React from "react";
const CursorEdit_02: React.FC<
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
        d="m8.5 8.5 13 5.056-5.778 2.166-2.166 5.778zM13.5 4h-8M4 5.5v8M5.5 2.5h-3v3h3zM5.5 13.5h-3v3h3zM16.5 2.5h-3v3h3z"
      />
    </svg>
  );
};
export default CursorEdit_02;
