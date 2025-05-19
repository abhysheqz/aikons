import React from "react";
const SidebarRight_01: React.FC<
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
        d="M13.25 2.25H5A3.75 3.75 0 0 0 1.25 6v12A3.75 3.75 0 0 0 5 21.75h8.25zm1.5 19.5H19A3.75 3.75 0 0 0 22.75 18V6A3.75 3.75 0 0 0 19 2.25h-4.25zm3-14.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M7.707 9.293a1 1 0 0 0-1.414 1.414L7.586 12l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarRight_01;
