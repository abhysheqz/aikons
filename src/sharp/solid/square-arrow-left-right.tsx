import React from "react";
const SquareArrowLeftRight: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.529 8.22-.72-.72h6.19v-1.5h-6.19l.72-.72-1.061-1.06L6.938 9l2.53 2.53zm2.939 3.06.72.72h-6.19v1.5h6.19l-.72.72 1.06 1.06 2.53-2.53-2.53-2.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowLeftRight;
