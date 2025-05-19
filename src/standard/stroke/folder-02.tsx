import React from "react";
const Folder_02: React.FC<
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
        d="M2 21V4a1 1 0 0 1 1-1h4.032a1 1 0 0 1 .768.36L10 6m0 0H7m3 0h8a2 2 0 0 1 2 2v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.477 21H2l3.749-9.371A1 1 0 0 1 6.677 11H21a1 1 0 0 1 .928 1.371z"
      />
    </svg>
  );
};
export default Folder_02;
