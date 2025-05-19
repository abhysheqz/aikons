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
        d="M6.75 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 4.75v6h-2v-6zm0 7v2.01h-2v-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 19a5.75 5.75 0 0 1 5.75-5.75h4A5.75 5.75 0 0 1 19.25 19v2.75H3.75z"
      />
    </svg>
  );
};
export default UserWarning_03;
