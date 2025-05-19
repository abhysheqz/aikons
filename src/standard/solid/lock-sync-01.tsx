import React from "react";
const LockSync_01: React.FC<
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
        d="M12.025 3C7.038 3 3 7.032 3 12s4.038 9 9.025 9c3.7 0 6.882-2.22 8.274-5.401a1 1 0 0 1 1.832.802 11.03 11.03 0 0 1-10.106 6.6C5.938 23 1 18.077 1 12 1 5.922 5.938 1 12.025 1c4.71 0 8.729 2.946 10.308 7.091.338.888.565 1.83.662 2.81a1 1 0 0 1-1.367 1.027l-2.5-1a1 1 0 0 1-.26-1.703l1.316-1.077A9.03 9.03 0 0 0 12.024 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.25c-.69 0-1.25.56-1.25 1.25v.75h2.5V9.5c0-.69-.56-1.25-1.25-1.25m2.75 2V9.5a2.75 2.75 0 1 0-5.5 0v.75H8.5a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockSync_01;
