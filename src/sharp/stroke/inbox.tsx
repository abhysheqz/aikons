import React from "react";
const Inbox: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h18v18H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 14h-6a3 3 0 1 1-6 0H3"
      />
    </svg>
  );
};
export default Inbox;
