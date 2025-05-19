import React from "react";
const NodeAdd: React.FC<
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
        d="M6 10h2v.5h5.5v2H8v6h5.5v2H7a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM12.75 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 4V2h2v2h2v2H8v2H6V6H4V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeAdd;
