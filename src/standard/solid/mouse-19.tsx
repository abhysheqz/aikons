import React from "react";
const Mouse_19: React.FC<
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
        d="M11.25 1.291a6.75 6.75 0 0 0-5.735 8.59c.4 1.38.53 3.04.193 4.355-.12.463-.278 1.075-.424 1.538l-.038.12.003.126c.097 3.617 3.058 6.73 6.75 6.73s6.654-3.113 6.75-6.73l.003-.126-.038-.12a32 32 0 0 1-.424-1.538c-.337-1.315-.206-2.975.194-4.356a6.751 6.751 0 0 0-5.734-8.589v2.976c.848.121 1.5.85 1.5 1.732v2a1.75 1.75 0 0 1-1.5 1.732V11a.75.75 0 1 1-1.5 0V9.731A1.75 1.75 0 0 1 9.75 8V6a1.75 1.75 0 0 1 1.5-1.732zm0 4.708a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_19;
