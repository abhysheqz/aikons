import React from "react";
const Road_01: React.FC<
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
        d="M6 1.25A2.75 2.75 0 0 0 3.25 4v16A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20V4A2.75 2.75 0 0 0 18 1.25zm7 4.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm0 5.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm0 5.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Road_01;
