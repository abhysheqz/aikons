import React from "react";
const ComputerDesk_03: React.FC<
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
        d="M11.25 12.25H20V18h-8a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11.25h20v2h-1v9h-2v-9H5v9H3v-9H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.251 2.5a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M9.5 12.25v-3h-3v3zM16.5 3.5c1.338 0 2.453.956 2.7 2.222l2.079.832a.75.75 0 0 1 .44.912l-1.5 5-1.437-.431 1.302-4.343-1.033-.414A2.75 2.75 0 0 1 16.5 9z"
      />
    </svg>
  );
};
export default ComputerDesk_03;
