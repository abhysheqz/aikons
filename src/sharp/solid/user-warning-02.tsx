import React from "react";
const UserWarning_02: React.FC<
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
        d="M7.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 4.75v6h-2v-6zm0 7v2.01h-2v-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.543 15.405c1.746-1.342 4.234-2.155 6.957-2.155s5.21.813 6.957 2.155l.293.226v5.119H4.25v-5.12z"
      />
    </svg>
  );
};
export default UserWarning_02;
