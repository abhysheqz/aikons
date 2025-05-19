import React from "react";
const Stairs_01: React.FC<
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
        d="M14.75 4.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v14a2.75 2.75 0 0 1-2.75 2.75h-14a1.75 1.75 0 0 1-1.75-1.75v-3c0-.966.784-1.75 1.75-1.75h2.25V12.5c0-.966.784-1.75 1.75-1.75h2.25V8.5c0-.966.784-1.75 1.75-1.75h2.25z"
      />
    </svg>
  );
};
export default Stairs_01;
