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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.791 8.768 4.693 1.836c2.706 1.059 4.06 1.589 4.015 2.429s-1.457 1.225-4.282 1.995c-.841.23-1.262.344-1.553.636-.292.291-.406.712-.636 1.553-.77 2.825-1.155 4.237-1.995 4.282s-1.37-1.308-2.43-4.015L8.769 12.79c-1.11-2.834-1.664-4.25-.946-4.969.718-.718 2.135-.163 4.969.946Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 2.5h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1M4.5 13.5h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1M15.5 2.5h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1M13.5 4h-8M4 5.5v8"
      />
    </svg>
  );
};
export default CursorEdit_02;
