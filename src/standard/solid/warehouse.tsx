import React from "react";
const Warehouse: React.FC<
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
        d="M10.933 1.966a2.75 2.75 0 0 1 2.134 0l7.5 3.157a2.75 2.75 0 0 1 1.683 2.535V21.5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-11a.25.25 0 0 0-.25-.25h-13a.25.25 0 0 0-.25.25v11a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75V7.658a2.75 2.75 0 0 1 1.683-2.535zM10.25 6.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M10 14.75a1.75 1.75 0 0 0-1.75 1.75v4c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-4A1.75 1.75 0 0 0 14 14.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Warehouse;
