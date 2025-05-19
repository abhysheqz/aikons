import React from "react";
const GitMerge: React.FC<
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
        d="M7 3.25a2.75 2.75 0 0 0-1 5.313v6.874a2.75 2.75 0 1 0 2 0v-2.381h6.46a2.75 2.75 0 1 0-.044-2H8V8.563A2.751 2.751 0 0 0 7 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitMerge;
