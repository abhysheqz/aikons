import React from "react";
const UserWarning_03: React.FC<
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
        d="M6.75 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M3.75 19a5.75 5.75 0 0 1 5.75-5.75h4A5.75 5.75 0 0 1 19.25 19a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 3.75 19"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 4.75a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserWarning_03;
