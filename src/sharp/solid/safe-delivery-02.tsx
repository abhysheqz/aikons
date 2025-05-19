import React from "react";
const SafeDelivery_02: React.FC<
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
        d="M16 14.25H8a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 .75.75h8a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75m-4.751 4h1.509v-1.5h-1.51z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 9h-.75v.375l.3.225zm16 0 .45.6.3-.225V9zm-8 6-.45.6c.267.2.633.2.9 0zM4.75 9c0-3.36 3.149-6.25 7.25-6.25v-1.5C7.265 1.25 3.25 4.629 3.25 9zM12 2.75c4.101 0 7.25 2.89 7.25 6.25h1.5c0-4.371-4.015-7.75-8.75-7.75zm-8 7h16v-1.5H4zm-.45-.15 8 6 .9-1.2-8-6zm8.9 6 8-6-.9-1.2-8 6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C7.265 1.25 3.25 4.629 3.25 9v.375l8.3 6.225c.267.2.633.2.9 0l8.3-6.225V9c0-4.371-4.015-7.75-8.75-7.75m0 12.813L6.25 9.75h11.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafeDelivery_02;
