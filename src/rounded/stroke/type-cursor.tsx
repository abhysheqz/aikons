import React from "react";
const TypeCursor: React.FC<
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
        strokeWidth={1.5}
        d="M6 16c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C2 13.395 2 12.93 2 12s0-1.395.102-1.777a3 3 0 0 1 2.122-2.12C4.605 8 5.07 8 6 8m6 8h6c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C22 13.395 22 12.93 22 12s0-1.395-.102-1.777a3 3 0 0 0-2.122-2.12C19.396 8 18.93 8 18 8h-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3h2m2 0H9m0 0v18m0 0H7m2 0h2"
      />
    </svg>
  );
};
export default TypeCursor;
