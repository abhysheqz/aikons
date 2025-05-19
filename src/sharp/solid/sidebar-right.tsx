import React from "react";
const SidebarRight: React.FC<
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
        d="M13.75 2.25H2a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h11.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 21.75h-6.75V2.25H22a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75M17.75 7.705h2.5v-1.5h-2.5zm0 3h2.5v-1.5h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarRight;
