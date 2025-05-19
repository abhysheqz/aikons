import React from "react";
const GitCommit: React.FC<
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
        d="M13 3a1 1 0 1 0-2 0v5.385a3.752 3.752 0 0 0 0 7.23V21a1 1 0 1 0 2 0v-5.385a3.752 3.752 0 0 0 0-7.23z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitCommit;
