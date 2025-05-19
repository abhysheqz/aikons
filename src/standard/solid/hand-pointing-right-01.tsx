import React from "react";
const HandPointingRight_01: React.FC<
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
        d="M9.448 3.787a2.53 2.53 0 0 1 3.106-.01 2.4 2.4 0 0 1 .292 3.55l-.97.923h8.374a2.5 2.5 0 0 1 0 5h-4.998c-.063 1.864-.638 4.569-2.685 6.603-.942.936-2.32.991-3.46.82-1.17-.174-2.33-.62-3.107-.992l-2.155-.931H2a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 2 8.25h1.744l5.703-4.462z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandPointingRight_01;
