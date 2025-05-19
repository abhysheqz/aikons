import React from "react";
const WindowsNew: React.FC<
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
        d="M11.25 2.25H5A2.75 2.75 0 0 0 2.25 5v6.25h9zM2.25 12.75V19A2.75 2.75 0 0 0 5 21.75h6.25v-9zM12.75 21.75H19A2.75 2.75 0 0 0 21.75 19v-6.25h-9zM21.75 11.25V5A2.75 2.75 0 0 0 19 2.25h-6.25v9z"
      />
    </svg>
  );
};
export default WindowsNew;
