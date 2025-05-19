import React from "react";
const MoreHorizontal: React.FC<
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
        d="M10.491 10.5h3.01v3h-3.01zM16.49 10.5h3.01v3h-3.01zM4.5 10.5h3.009v3h-3.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreHorizontal;
