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
        d="M9.469 2.47A.75.75 0 0 1 10 2.25h4a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.752V3.002c0-.2.078-.39.219-.532"
      />
      <path
        fill="currentColor"
        d="M20.998 9.25a.75.75 0 0 1 .752.75v4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .752-.75z"
      />
    </svg>
  );
};
export default Add_02;
