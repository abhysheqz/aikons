import React from "react";
const Building_02: React.FC<
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
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 4A2.75 2.75 0 0 1 7 1.25h10A2.75 2.75 0 0 1 19.75 4v18a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm4.5 14c0-.967.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3.866a.75.75 0 1 1-1.5 0V18a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25v3.866a.75.75 0 1 1-1.5 0zM10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_02;
