import React from "react";
const Instagram: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm14.25 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-.001-4.5h2.009v-2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Instagram;
