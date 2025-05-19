import React from "react";
const Remove_02: React.FC<
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
        d="M2.25 10A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default Remove_02;
