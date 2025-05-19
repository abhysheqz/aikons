import React from "react";
const CursorMagicSelection_02: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 9.639 21 11l-8 3-3 8L3 4l3 1.167"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M11.5 4A5.92 5.92 0 0 0 15 7.5a5.92 5.92 0 0 0-3.5 3.5A5.92 5.92 0 0 0 8 7.5 5.92 5.92 0 0 0 11.5 4ZM15.75 2c.214.58.67 1.036 1.25 1.25-.58.214-1.036.67-1.25 1.25a2.12 2.12 0 0 0-1.25-1.25A2.12 2.12 0 0 0 15.75 2Z"
      />
    </svg>
  );
};
export default CursorMagicSelection_02;
