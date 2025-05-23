import React from "react";
const CursorEdit_01: React.FC<
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
        d="M13.5 4h-8M4 5.5v8M12.044 21.086 7.526 8.105a.455.455 0 0 1 .58-.579l12.99 4.516c.364.126.416.619.086.818l-3.5 2.113a.454.454 0 0 0-.085.71l3.769 3.747a.454.454 0 0 1 0 .644l-1.293 1.293a.455.455 0 0 1-.643 0l-3.76-3.758a.455.455 0 0 0-.712.087l-2.095 3.475a.455.455 0 0 1-.819-.085M5.5 2.5h-3v3h3zM5.5 13.5h-3v3h3zM16.5 2.5h-3v3h3z"
      />
    </svg>
  );
};
export default CursorEdit_01;
