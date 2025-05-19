import React from "react";
const ServerStack_01: React.FC<
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
        d="M1.25 13.25h21.5v7.5H1.25zM5 16h2.01v2H5zm6.01 0H9v2h2.01zM1.25 3.25h21.5v7.5H1.25zM5 6h2.01v2H5zm6.01 0H9v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ServerStack_01;
