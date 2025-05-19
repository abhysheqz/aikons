import React from "react";
const UserMultiple_03: React.FC<
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
        d="M5.75 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m-2.707 7.905C4.789 14.063 7.277 13.25 10 13.25s5.21.813 6.957 2.155l.293.226v5.119H2.75v-5.12zm10.48-3.681A5.49 5.49 0 0 0 15.5 7.5a5.49 5.49 0 0 0-1.977-4.224q.236-.026.477-.026a4.25 4.25 0 1 1-.477 8.474M18.5 20.75v-5.735l-.781-.6q-.722-.555-1.567-.991c1.865.306 3.532 1.003 4.805 1.982l.293.225v5.12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserMultiple_03;
