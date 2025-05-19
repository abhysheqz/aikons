import React from "react";
const ModernTvIssue: React.FC<
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
        d="M1.25 4.875A3.75 3.75 0 0 1 5 1.125h14a3.75 3.75 0 0 1 3.75 3.75v10a3.75 3.75 0 0 1-3.75 3.75H5a3.75 3.75 0 0 1-3.75-3.75zm9.75 8.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m2-7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 21.875c-1.29 0-2.492.322-3.524.88a1 1 0 0 1-.951-1.76A9.4 9.4 0 0 1 12 19.875c1.625 0 3.154.406 4.476 1.12a1 1 0 0 1-.951 1.76 7.4 7.4 0 0 0-3.525-.88"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ModernTvIssue;
