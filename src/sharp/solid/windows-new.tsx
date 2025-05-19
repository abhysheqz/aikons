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
        d="M11.25 2.25h-9v9h9zM2.25 12.75v9h9v-9zM12.75 21.75h9v-9h-9zM21.75 11.25v-9h-9v9z"
      />
    </svg>
  );
};
export default WindowsNew;
