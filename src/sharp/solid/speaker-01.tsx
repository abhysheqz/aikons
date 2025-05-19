import React from "react";
const Speaker_01: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm4.5 12.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M9 7h6V5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Speaker_01;
