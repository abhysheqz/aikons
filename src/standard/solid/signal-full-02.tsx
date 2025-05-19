import React from "react";
const SignalFull_02: React.FC<
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
        d="M2.25 15c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 6 19.75H4A1.75 1.75 0 0 1 2.25 18zM9.25 11c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v7A1.75 1.75 0 0 1 13 19.75h-2A1.75 1.75 0 0 1 9.25 18zM16.25 7c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v11A1.75 1.75 0 0 1 20 19.75h-2A1.75 1.75 0 0 1 16.25 18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalFull_02;
