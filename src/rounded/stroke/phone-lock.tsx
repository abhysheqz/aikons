import React from "react";
const PhoneLock: React.FC<
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
        d="M12.5 2h-4L9 3h3zM15.5 11v-1a1.5 1.5 0 0 1 3 0v1M15 15.5h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.997 6c-.014-1.707-.109-2.647-.73-3.268C15.537 2 14.358 2 12 2H9c-2.357 0-3.536 0-4.268.732S4 4.643 4 7v10c0 2.357 0 3.535.732 4.268S6.643 22 9 22h3c2.357 0 3.536 0 4.268-.732.62-.62.715-1.561.73-3.268"
      />
    </svg>
  );
};
export default PhoneLock;
