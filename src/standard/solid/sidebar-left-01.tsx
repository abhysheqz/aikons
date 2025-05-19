import React from "react";
const SidebarLeft_01: React.FC<
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
        d="M10.75 2.25H19A3.75 3.75 0 0 1 22.75 6v12A3.75 3.75 0 0 1 19 21.75h-8.25zm-1.5 0v19.5H5A3.75 3.75 0 0 1 1.25 18V6A3.75 3.75 0 0 1 5 2.25zM3.75 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 3.75 7m0 3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m13.957.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L16.414 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarLeft_01;
