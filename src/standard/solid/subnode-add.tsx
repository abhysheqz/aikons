import React from "react";
const SubnodeAdd: React.FC<
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
        d="M2.75 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-2v1.75H12a1 1 0 1 1 0 2H8.5v5a1 1 0 0 0 1 1h4.25V18c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 13.75 21v-.5H9.5a3 3 0 0 1-3-3V8.75h-2A1.75 1.75 0 0 1 2.75 7zM18.5 9a1 1 0 1 0-2 0v1.5H15a1 1 0 1 0 0 2h1.5V14a1 1 0 1 0 2 0v-1.5H20a1 1 0 1 0 0-2h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SubnodeAdd;
