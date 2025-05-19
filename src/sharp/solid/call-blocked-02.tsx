import React from "react";
const CallBlocked_02: React.FC<
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
        d="M17 2.5a4.5 4.5 0 0 0-3.182 1.318A4.5 4.5 0 1 0 17 2.5M19.5 7c0 .323-.061.63-.172.914l-3.242-3.242A2.5 2.5 0 0 1 19.5 7m-4.828-.914 3.242 3.242a2.5 2.5 0 0 1-3.242-3.242"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.695-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallBlocked_02;
