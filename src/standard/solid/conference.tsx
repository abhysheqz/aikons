import React from "react";
const Conference: React.FC<
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
        d="M21.75 6a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0v-10a.75.75 0 0 1 .75-.75M1.75 6a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0v-10A.75.75 0 0 1 1.75 6M6.75 2A2.75 2.75 0 0 0 4 4.75v14a2.75 2.75 0 0 0 2.75 2.75h10a2.75 2.75 0 0 0 2.75-2.75v-14A2.75 2.75 0 0 0 16.75 2zm5 4.086a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M11.753 12A4.25 4.25 0 0 0 7.5 16.25c0 .415.336.75.75.75h7.003a.75.75 0 0 0 .75-.75A4.25 4.25 0 0 0 11.752 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Conference;
