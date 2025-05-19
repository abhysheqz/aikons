import React from "react";
const GitFork: React.FC<
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
        d="M6 3.25a2.75 2.75 0 0 0-1 5.313V11a2 2 0 0 0 2 2h4v2.438a2.75 2.75 0 1 0 2 0V13h4a2 2 0 0 0 2-2V8.563a2.751 2.751 0 1 0-2 0V11H7V8.563A2.751 2.751 0 0 0 6 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitFork;
