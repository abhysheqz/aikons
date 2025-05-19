import React from "react";
const Woman: React.FC<
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
        d="M9.129 9.465a3.261 3.261 0 0 1 5.743 0l2.788 5.18a.75.75 0 0 1 .09.355v1a.75.75 0 0 1-.75.75h-2.25V22a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-5.25H7a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .09-.356zM9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Woman;
