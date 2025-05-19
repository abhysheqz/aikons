import React from "react";
const SubnodeDelete: React.FC<
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
        d="M2.75 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-2v1.75H13a1 1 0 1 1 0 2H8.5v5a1 1 0 0 0 1 1h4.25V18c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 13.75 21v-.5H9.5a3 3 0 0 1-3-3V8.75h-2A1.75 1.75 0 0 1 2.75 7zm13.457 5.793a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 0 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414L18.914 11.5l1.293-1.293a1 1 0 0 0-1.414-1.414L17.5 10.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SubnodeDelete;
