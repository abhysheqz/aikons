import React from "react";
const License: React.FC<
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
        d="M5.5 1.25A2.75 2.75 0 0 0 2.75 4v16a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.25 20V4a2.75 2.75 0 0 0-2.75-2.75zM8 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default License;
