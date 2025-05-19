import React from "react";
const Stairs_02: React.FC<
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
        d="M10.25 8.25V6a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h2.25V12a.75.75 0 0 1 .75-.75h2.25V9A.75.75 0 0 1 8 8.25zm8 0v-1.5h-6.5v1.5zm-9.5 1.5v1.5h6.5v-1.5zm3.5 3v1.5h-6.5v-1.5zm-3 4.5v-1.5h-6.5v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stairs_02;
