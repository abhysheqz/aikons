import React from "react";
const MessageAdd_02: React.FC<
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
        d="M15 5.75h7m-3.5-3.5v7.001"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12.752h.008m3.987 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.752 3.266c-.367-.006-.798-.019-1.192 0-7.264.129-9.562 4.569-9.562 9.554 0 1.704.347 3.791 1.6 5.43l-1.586 3.978a.01.01 0 0 0 .012.013l4.55-1.461c1.5.83 3.2 1.013 5.083 1.013 6.492.455 10.31-3.75 10.31-8.735.014-.62.066-1.259 0-1.875"
      />
    </svg>
  );
};
export default MessageAdd_02;
