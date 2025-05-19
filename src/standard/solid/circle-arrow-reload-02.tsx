import React from "react";
const CircleArrowReload_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.5 14a.75.75 0 0 0 0 1.5h1A1.75 1.75 0 0 0 15.25 15V9.5l.8.6a.75.75 0 1 0 .9-1.2l-2-1.5a.75.75 0 0 0-1.2.6v7a.25.25 0 0 1-.25.25zM7.95 13.9a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.2-.6V9a.25.25 0 0 1 .25-.25h1a.75.75 0 1 0 0-1.5h-1A1.75 1.75 0 0 0 8.75 9v5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowReload_02;
