import React from "react";
const Facebook_01: React.FC<
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
        d="M12 7a1 1 0 0 0-1 1v5H9v2h2v6.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-8V15h2v-2h-2V9h4V7z"
      />
    </svg>
  );
};
export default Facebook_01;
