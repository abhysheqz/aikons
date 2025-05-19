import React from "react";
const Motion_01: React.FC<
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
        d="M3 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a1 1 0 1 0 0-2H3V3h8v1a1 1 0 1 0 2 0V3a2 2 0 0 0-2-2zm3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a1 1 0 1 1-2 0V8H8v8h1a1 1 0 1 1 0 2H8a2 2 0 0 1-2-2zm5.25 5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 21 22.75h-8A1.75 1.75 0 0 1 11.25 21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Motion_01;
