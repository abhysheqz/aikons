import React from "react";
const Puzzle: React.FC<
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
        d="M6.25 5a3.75 3.75 0 1 1 7.5 0v.25H17c.966 0 1.75.784 1.75 1.75v3.25H19a3.75 3.75 0 1 1 0 7.5h-.25V21A1.75 1.75 0 0 1 17 22.75h-4a.75.75 0 0 1-.75-.75v-1a2.25 2.25 0 0 0-4.5 0v1a.75.75 0 0 1-.75.75H3A1.75 1.75 0 0 1 1.25 21v-4a.75.75 0 0 1 .75-.75h1a2.25 2.25 0 0 0 0-4.5H2a.75.75 0 0 1-.75-.75V7c0-.966.784-1.75 1.75-1.75h3.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Puzzle;
