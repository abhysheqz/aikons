import React from "react";
const Files_02: React.FC<
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
        fillRule="evenodd"
        d="M5.75 20a2.75 2.75 0 0 0 2.75 2.75h7a.75.75 0 0 0 .53-.22l5-5a.75.75 0 0 0 .22-.53V7a2.75 2.75 0 0 0-2.75-2.75h-10A2.75 2.75 0 0 0 5.75 7zm14-3.31-4.56 4.56v-3.06a1.5 1.5 0 0 1 1.5-1.5zM10 13.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0-4a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.5 19.563A2.75 2.75 0 0 1 2.75 17V4A2.75 2.75 0 0 1 5.5 1.25h10A2.75 2.75 0 0 1 18.063 3H8.5a4 4 0 0 0-4 4z"
      />
    </svg>
  );
};
export default Files_02;
