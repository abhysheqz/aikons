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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 3v18H2V3zM14 3v18M19.5 7h-3m3 4h-3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 9 3 3-3 3" />
    </svg>
  );
};
export default SidebarRight_01;
