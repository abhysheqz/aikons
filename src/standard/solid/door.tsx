import React from "react";
const Door: React.FC<
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
        d="M7 1a3 3 0 0 0-3 3v17H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1V4a3 3 0 0 0-3-3zm.25 5c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 15 13.75H9A1.75 1.75 0 0 1 7.25 12zM9 5.75h2.25v2.5h-2.5V6A.25.25 0 0 1 9 5.75M8.75 12V9.75h2.5v2.5H9a.25.25 0 0 1-.25-.25m6.25.25h-2.25v-2.5h2.5V12a.25.25 0 0 1-.25.25m-2.25-4h2.5V6a.25.25 0 0 0-.25-.25h-2.25zM9.008 17a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Door;
