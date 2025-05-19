import React from "react";
const Tablet_02: React.FC<
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
        d="M2.75 2a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75zM14 4.75h-4v-1.5h4zm-.99 13.75H11v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tablet_02;
