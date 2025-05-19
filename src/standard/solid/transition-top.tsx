import React from "react";
const TransitionTop: React.FC<
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
        d="M2 7a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm.25 12A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-3A2.75 2.75 0 0 0 19 13.25h-6V9.701h2.61c.291 0 .61-.126.637-.416a.75.75 0 0 0-.259-.641L12.775 5.89a1 1 0 0 0-.27-.232l-.017-.014a.75.75 0 0 0-.976 0l-.017.014c-.103.06-.195.14-.27.232L8.012 8.644a.75.75 0 0 0-.259.64c.028.291.346.417.638.417H11v3.549H5A2.75 2.75 0 0 0 2.25 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionTop;
