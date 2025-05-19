import React from "react";
const MailOpen: React.FC<
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
        strokeWidth={1.5}
        d="m2 9.946 10 5.465 10-5.465"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 11.933V2h14v9.933" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 9.947h6M9 5.973h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.908 6.967 3.086 3.084-.026 11.936a.01.01 0 0 1-.01.01H2.01a.01.01 0 0 1-.01-.01v-11.92L5.032 7.01"
      />
    </svg>
  );
};
export default MailOpen;
