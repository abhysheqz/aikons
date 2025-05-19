import React from "react";
const Add_02: React.FC<
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
        d="M9.25 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-6.25V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-6.25H3a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 3 9.25h6.25z"
      />
    </svg>
  );
};
export default Add_02;
