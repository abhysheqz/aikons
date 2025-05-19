import React from "react";
const NotificationBubble: React.FC<
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
        d="M22.001 5.985a3.49 3.49 0 0 1-3.5 3.484c-1.933 0-3.5-1.56-3.5-3.484a3.49 3.49 0 0 1 3.5-3.483c1.933 0 3.5 1.56 3.5 3.483Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.001 10.512v2.417c0 4.424-3.59 8.011-8.02 8.011h-3.955c-1.254 0-2.596-.365-3.654-.878l-4.239 1.43a.1.1 0 0 1-.126-.132l1.51-3.75c-.878-1.284-1.512-3.01-1.512-4.681v-2.327c0-4.425 3.591-8.012 8.021-8.012h2.659"
      />
    </svg>
  );
};
export default NotificationBubble;
