import React from "react";
const City_02: React.FC<
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
        d="M18.75 14.25h-3v-2h4a1 1 0 0 1 1 1v9h-2zM5.25 14.25h3v-2h-4a1 1 0 0 0-1 1v9h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22.75H2v-2h20zM13 1.25v2h-2v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 4A.75.75 0 0 1 8 3.25h8a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75zm5.5 14v4h-1.5v-4zM11 8.75h2v-1.5h-2zm0 3.5h2v-1.5h-2zm0 3.5h2v-1.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_02;
