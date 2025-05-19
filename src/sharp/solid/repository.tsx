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
        d="M2.25 2.222c0-.537.437-.972.975-.972h17.55c.539 0 .975.435.975.972v15.556a.974.974 0 0 1-.975.972h-2.9v-1.944H19.8V3.194H4.2v13.612h1.925v1.944h-2.9a.974.974 0 0 1-.975-.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.137.642L12 21.068l-2.613 1.574A.75.75 0 0 1 8.25 22z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 11H7V9h10zM12 7H7V5h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Repository;
