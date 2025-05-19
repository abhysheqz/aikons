import React from "react";
const NotificationSquare: React.FC<
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
        d="M13 3H2v19h19V11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM7 11h4M7 16h8"
      />
    </svg>
  );
};
export default NotificationSquare;
