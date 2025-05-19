import React from "react";
const Door_01: React.FC<
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
        d="M17.75 5.25h-4v-2h6v17h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.75 2a.75.75 0 0 0-.913-.732l-9 2A.75.75 0 0 0 4.25 4v16a.75.75 0 0 0 .587.732l9 2A.75.75 0 0 0 14.75 22zM12 13.5v-3h-2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 20.71H2v-2h3zm17 .001h-8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Door_01;
