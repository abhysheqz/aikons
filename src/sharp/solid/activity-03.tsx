import React from "react";
const Activity_03: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm10.631 11.252-3-8L7.882 11H5v2h4.118l1.25-2.501 3 8L16.119 13H19v-2h-4.118z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_03;
