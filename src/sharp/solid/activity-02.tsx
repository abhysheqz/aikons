import React from "react";
const Activity_02: React.FC<
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
        d="M16.75 4.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.902 2.75a4 4 0 0 0 5.348 5.348V21.5a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75v-18a.75.75 0 0 1 .75-.75zm2.012 7.75L13 15.414l-3-3-3.5 3.5L5.086 14.5 10 9.586l3 3 3.5-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_02;
