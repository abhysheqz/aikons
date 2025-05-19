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
        d="M7 7a1 1 0 0 1 1 1c0 .994.009 1.295.068 1.518a2 2 0 0 0 1.414 1.414c.223.06.524.068 1.518.068h4a1 1 0 1 1 0 2h-4.138c-.795 0-1.386 0-1.897-.136a4 4 0 0 1-.965-.4V16a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M14.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitMerge;
