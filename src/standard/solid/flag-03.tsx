import React from "react";
const Flag_03: React.FC<
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
        d="M4 7a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.996 3a1 1 0 0 1 1-1H20a1 1 0 0 1 .83 1.557l-3.644 5.44 3.645 5.447A1 1 0 0 1 19.999 16l-15.993-.012v.01a1.01 1.01 0 0 1-1.01-1.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flag_03;
