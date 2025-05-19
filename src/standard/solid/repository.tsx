import React from "react";
const Repository: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2 1 1 0 1 1 0 2 4 4 0 0 1-4-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M7 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M8.25 15c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v7a.75.75 0 0 1-1.166.624L12 20.901l-2.584 1.723A.75.75 0 0 1 8.25 22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Repository;
