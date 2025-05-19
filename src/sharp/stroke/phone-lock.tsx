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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.5 2h-4L9 3h3zM15.5 11v-1a1.5 1.5 0 0 1 3 0v1M14 15.5h6v-4h-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 18v4H4V2h13v4"
      />
    </svg>
  );
};
export default PhoneLock;
