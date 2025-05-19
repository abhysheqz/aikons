import React from "react";
const SquareArrowUpDown: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8.53 7.22L9 6.94 6.468 9.47l1.06 1.06.72-.72V16h1.5V9.81l.72.72zm4.22 4.72V8h-1.5v6.19l-.72-.72-1.061 1.06 2.53 2.53 2.53-2.53-1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpDown;
