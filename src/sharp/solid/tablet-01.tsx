import React from "react";
const Tablet_01: React.FC<
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
        d="M3.5 1.25a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zm9.51 17.25H11v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tablet_01;
