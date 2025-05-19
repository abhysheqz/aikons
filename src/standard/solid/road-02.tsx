import React from "react";
const Road_02: React.FC<
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
        d="M4 3.25A2.75 2.75 0 0 0 1.25 6v12A2.75 2.75 0 0 0 4 20.75h16A2.75 2.75 0 0 0 22.75 18V6A2.75 2.75 0 0 0 20 3.25zM5.5 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm5.5 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm5.5 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Road_02;
