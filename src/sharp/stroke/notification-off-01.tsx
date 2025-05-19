import React from "react";
const NotificationOff_01: React.FC<
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
        d="M10.5 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM15 19a3 3 0 1 1-6 0M22 22 2 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.945 5.75A6.7 6.7 0 0 1 12.012 5c3.843 0 6.816 3.225 6.816 6.405v2.561l2.17 2.474v1.357M7.095 7.093C5.87 8.31 5.12 9.888 5.12 11.373v2.566l-2.118 2.58V19h15.992"
      />
    </svg>
  );
};
export default NotificationOff_01;
