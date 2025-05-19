import React from "react";
const Radio_02: React.FC<
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
        d="M4 5.25A2.75 2.75 0 0 0 1.25 8v10A2.75 2.75 0 0 0 4 20.75h16A2.75 2.75 0 0 0 22.75 18V8A2.75 2.75 0 0 0 20 5.25zM7.5 14a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zM5 11a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m10.5-1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.928 1.629a1 1 0 0 1-.557 1.3L7.02 7.123a1 1 0 0 1-.744-1.857l10.35-4.194a1 1 0 0 1 1.3.557M6 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radio_02;
