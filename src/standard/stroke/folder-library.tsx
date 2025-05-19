import React from "react";
const FolderLibrary: React.FC<
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
        d="m5.622 20.101-2.576-8.3c-.2-.645.274-1.3.94-1.3h16.028c.666 0 1.14.655.94 1.3l-2.576 8.3a1.97 1.97 0 0 1-1.879 1.4H7.501c-.86 0-1.62-.567-1.88-1.4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 8v-.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1V8M7.5 4v-.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V4"
      />
    </svg>
  );
};
export default FolderLibrary;
