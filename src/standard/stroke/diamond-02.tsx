import React from "react";
const Diamond_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 8.5h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.673 3.5H6.327c-.312 0-.608.135-.803.368L2.225 7.796a.94.94 0 0 0-.012 1.21l8.972 11.112a1.06 1.06 0 0 0 1.63 0l8.972-11.113a.94.94 0 0 0-.012-1.209l-3.3-3.928a1.05 1.05 0 0 0-.802-.368Z"
      />
    </svg>
  );
};
export default Diamond_02;
