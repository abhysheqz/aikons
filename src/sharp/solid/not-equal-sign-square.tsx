import React from "react";
const NotEqualSignSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.499 15.305 1.555-2.333H17v-2h-4.613l1.63-2.444H17v-2h-1.65l.815-1.223-1.664-1.11-1.555 2.333H7v2h4.613l-1.63 2.444H7v2h1.65l-.815 1.223z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotEqualSignSquare;
