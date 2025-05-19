import React from "react";
const Health: React.FC<
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
        d="M18.858 3.71C14.866 1.564 12 4.967 12 4.967S9.134 1.564 5.142 3.71C.404 6.256-.024 16.08 11.296 20.724a1.87 1.87 0 0 0 1.409 0C24.025 16.08 23.596 6.256 18.857 3.71M12 9v3m0 0v3m0-3H9m3 0h3"
      />
    </svg>
  );
};
export default Health;
