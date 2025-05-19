import React from "react";
const SidebarBottom: React.FC<
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
        d="M1.25 5A2.75 2.75 0 0 1 4 2.25h16A2.75 2.75 0 0 1 22.75 5v8.75H1.25zm0 10.25h21.5V19A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19zM6 17.5A.75.75 0 0 0 6 19h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarBottom;
