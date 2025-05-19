import React from "react";
const CallLocked_02: React.FC<
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
        d="M20 6v-.75a2.75 2.75 0 1 0-5.5 0V6H13v6h8.5V6zm-4-.75a1.25 1.25 0 1 1 2.5 0V6H16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.416-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallLocked_02;
