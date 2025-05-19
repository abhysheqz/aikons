import React from "react";
const SidebarLeft: React.FC<
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
        d="M4 2.25h4.75v19.5H4A2.75 2.75 0 0 1 1.25 19V5A2.75 2.75 0 0 1 4 2.25m16 19.5h-9.75V2.25H20A2.75 2.75 0 0 1 22.75 5v14A2.75 2.75 0 0 1 20 21.75M4.502 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 1 0 0-1.5zm0 3a.75.75 0 1 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarLeft;
