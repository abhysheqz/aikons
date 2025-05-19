import React from "react";
const HierarchyFiles: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.993 5.995H4m0 0V2m0 3.995.001 11.984h5.992"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.121 9.988h6.775a.1.1 0 0 0 .1-.1V4.538L17.48 1.984H13.12a.1.1 0 0 0-.1.1V9.89a.1.1 0 0 0 .1.1ZM13.121 21.98h6.775a.1.1 0 0 0 .1-.1V16.53l-2.516-2.552H13.12a.1.1 0 0 0-.1.1v7.804a.1.1 0 0 0 .1.1Z"
      />
    </svg>
  );
};
export default HierarchyFiles;
