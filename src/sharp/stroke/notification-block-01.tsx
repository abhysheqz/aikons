import React from "react";
const NotificationBlock_01: React.FC<
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
        d="M9.999 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM14.499 19a3 3 0 1 1-6 0M15.549 7.05l4.9 4.9m1.05-2.45a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.908 5.437A6.8 6.8 0 0 0 11.51 5C7.67 5 4.62 8.38 4.62 11.373v2.566l-2.118 2.58V19h17.996v-2.56l-1.174-1.359"
      />
    </svg>
  );
};
export default NotificationBlock_01;
