import React from "react";
const Unlink_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 17H17a5 5 0 0 0 0-10h-3.5m-3 10H7A5 5 0 0 1 7 7h3.5M15.5 21l-1-1.5m-6 1.5 1-1.5M8.5 3l1 1.5m6-1.5-1 1.5"
      />
    </svg>
  );
};
export default Unlink_05;
