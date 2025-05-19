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
        fill="currentColor"
        d="m7.75 7.75 14.5 5.639-6.444 2.417-2.417 6.444z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 3.25h9.5v1.5h-9.5zm0 1.5v9.5h-1.5v-9.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.75 1.75h4.5v4.5h-4.5zM12.75 1.75h4.5v4.5h-4.5zM1.75 12.75h4.5v4.5h-4.5z"
      />
    </svg>
  );
};
export default CursorEdit_02;
