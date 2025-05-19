import React from "react";
const ComputerCloud: React.FC<
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
        d="M10.5 15.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1.25A2.75 2.75 0 0 0 1.25 4v10A2.75 2.75 0 0 0 4 16.75h16A2.75 2.75 0 0 0 22.75 14V4A2.75 2.75 0 0 0 20 1.25zM14.5 7.5h-.05a2.5 2.5 0 0 0-4.9 0H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 0 0-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerCloud;
