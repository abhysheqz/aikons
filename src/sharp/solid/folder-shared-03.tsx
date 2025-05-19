import React from "react";
const FolderShared_03: React.FC<
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
        d="M13.006 16.75v4H21.5v2h-19v-2h8.506v-4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M1.25 1.25h8.095l3 3.5H22.75v14H1.25z" />
    </svg>
  );
};
export default FolderShared_03;
