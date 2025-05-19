import React from "react";
const UserMultiple: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 21a6 6 0 0 0-12 0M11 7a4 4 0 1 1 4 4m0 0a6 6 0 0 1 6 6m-6-6c-.53 0-1.037-.103-1.5-.29"
      />
    </svg>
  );
};
export default UserMultiple;
