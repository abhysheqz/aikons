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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.995H4m0 0V2m0 3.995L4.001 16a2 2 0 0 0 2 2H10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.086 2H14a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4.914a1 1 0 0 0-.293-.707l-1.914-1.914A1 1 0 0 0 17.086 2ZM17.086 14H14a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4.086a1 1 0 0 0-.293-.707l-1.914-1.914a1 1 0 0 0-.707-.293Z"
      />
    </svg>
  );
};
export default HierarchyFiles;
