import React from "react";
const CursorMagicSelection_01: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M13.5 4A5.92 5.92 0 0 0 17 7.5a5.92 5.92 0 0 0-3.5 3.5A5.92 5.92 0 0 0 10 7.5 5.92 5.92 0 0 0 13.5 4ZM17.75 2c.214.58.67 1.036 1.25 1.25-.58.214-1.036.67-1.25 1.25a2.12 2.12 0 0 0-1.25-1.25A2.12 2.12 0 0 0 17.75 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17 11.73 2 1.77-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.5 2.212"
      />
    </svg>
  );
};
export default CursorMagicSelection_01;
