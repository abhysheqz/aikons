import React from "react";
const SubnodeDelete: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 19.5h-7v-8m0-3.5v3.5m0 0h6M20.5 22v-5h-6v5zM11.5 8V2h-8v6zM19.5 9.5l-2 2m0 0-2 2m2-2 2 2m-2-2-2-2"
      />
    </svg>
  );
};
export default SubnodeDelete;
