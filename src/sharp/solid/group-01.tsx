import React from "react";
const Group_01: React.FC<
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
        d="M7 6h14v2H7zM3 6h2.01v2H3zM7 11h2.01v2H7zM7 16h2.01v2H7zM11 11h10v2H11zM11 16h10v2H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Group_01;
