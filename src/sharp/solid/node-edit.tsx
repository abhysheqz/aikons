import React from "react";
const NodeEdit: React.FC<
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
        d="M12.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM19.282 4.47a.75.75 0 0 1 1.06 0l2.188 2.187a.75.75 0 0 1 0 1.06l-5.032 5.033H14.25V9.502z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 8h2v2.5h5.5v2H7v6h6v2H6a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 2A.75.75 0 0 1 2 1.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 8z"
      />
    </svg>
  );
};
export default NodeEdit;
