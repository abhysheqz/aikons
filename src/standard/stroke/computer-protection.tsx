import React from "react";
const ComputerProtection: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 1.997H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12.5M11 14.958h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 6.073V3.855a.716.716 0 0 0-.598-.697c-1.36-.24-2.489-.772-3.04-1.067a.77.77 0 0 0-.724 0c-.551.295-1.68.827-3.04 1.067a.716.716 0 0 0-.598.697v2.218c0 2.893 2.906 4.47 3.764 4.874.151.07.32.07.472 0C19.094 10.544 22 8.966 22 6.073Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.977 18v4m0 0H16m-4.023 0H8"
      />
    </svg>
  );
};
export default ComputerProtection;
