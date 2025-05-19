import React from "react";
const Tree_06: React.FC<
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
        d="M11.25 18.752v2.498H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.498z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.998 3.252q-.33.001-.636.056c-.639-1.228-1.964-2.067-3.367-2.056A3.75 3.75 0 0 0 8.653 3.31 3.75 3.75 0 0 0 4.25 7.002c0 .366.128.758.235 1.038l.022.057c-1.314.65-2.257 1.776-2.257 3.405 0 2.066 1.379 3.802 3.073 4.174.16.734.569 1.403 1.082 1.917.668.668 1.6 1.158 2.595 1.16h2.25V13.31l-2.28-2.28a.75.75 0 1 1 1.06-1.061l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v3.442h2.249c.994-.001 1.926-.49 2.594-1.159.513-.514.921-1.183 1.082-1.917 1.694-.372 3.073-2.107 3.073-4.174 0-1.629-.943-2.755-2.257-3.405l.022-.057c.107-.28.235-.672.235-1.038a3.75 3.75 0 0 0-3.75-3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_06;
