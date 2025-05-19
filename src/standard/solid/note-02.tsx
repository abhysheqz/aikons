import React from "react";
const Note_02: React.FC<
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
        d="M7 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 5.5A2.75 2.75 0 0 1 5.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75V20a2.75 2.75 0 0 1-2.75 2.75h-7.248V17.5a2.75 2.75 0 0 0-2.75-2.75H2.75zm.22 10.75c.137.32.334.615.585.866l4.829 4.829a2.75 2.75 0 0 0 1.368.744V17.5c0-.69-.56-1.25-1.25-1.25zM7.75 10a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_02;
