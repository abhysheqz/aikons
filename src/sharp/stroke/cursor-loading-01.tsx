import React from "react";
const CursorLoading_01: React.FC<
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
        d="M15 6a3 3 0 0 0 3-3V2h-6v1a3 3 0 0 0 3 3Zm0 0a3 3 0 0 1 3 3v1h-6V9a3 3 0 0 1 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m19 13.5-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l3.58 3.167"
      />
    </svg>
  );
};
export default CursorLoading_01;
