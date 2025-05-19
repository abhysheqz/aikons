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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5.5 2.5h-3v3h3zM5.5 13.5h-3v3h3zM16.5 2.5h-3v3h3zM13.5 4h-8M4 5.5v8M11.955 21.5 7.5 7.5l14 4.454-4.775 2.885 4.457 4.434-1.918 1.917-4.445-4.445z"
      />
    </svg>
  );
};
export default CursorEdit_01;
