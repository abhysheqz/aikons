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
        d="M10.75 2.25H22a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H10.75zm7.841 7.28L16.121 12l2.47 2.47-1.06 1.06L14 12l3.53-3.53zM9.25 21.75H2a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 2 2.25h7.25zm-2.5-15.5h-3v1.5h3zm0 4h-3v1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarLeft_01;
