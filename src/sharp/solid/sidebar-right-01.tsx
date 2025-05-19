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
        d="M13.25 2.25H2a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h11.25zM5.408 9.53 7.878 12l-2.47 2.47 1.06 1.06L10 12 6.47 8.47zM14.75 21.75H22a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-7.25zm2.5-15.5h3v1.5h-3zm0 4h3v1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarRight_01;
