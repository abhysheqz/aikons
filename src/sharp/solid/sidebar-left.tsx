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
        d="M10.25 2.25H22a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H10.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.002 21.75h6.75V2.25h-6.75a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75M6.248 7.705h-2.5v-1.5h2.5zm0 3h-2.5v-1.5h2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarLeft;
