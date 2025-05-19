import React from "react";
const SchoolBell_02: React.FC<
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
        d="M8.103 8.44a5.483 5.483 0 0 1 7.457 7.457l-3.316 5.967a.75.75 0 0 1-1.185.166l-9.09-9.089a.75.75 0 0 1 .167-1.185z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.237 16.636a5.66 5.66 0 0 1-1.644 3.06 5.94 5.94 0 0 1-2.942 1.539l-.303-1.47a4.44 4.44 0 0 0 2.203-1.148 4.16 4.16 0 0 0 1.21-2.253zM7.656 5.234a4.43 4.43 0 0 0-2.222 1.2 4.43 4.43 0 0 0-1.201 2.223l-1.467-.314a5.93 5.93 0 0 1 1.607-2.969 5.93 5.93 0 0 1 2.97-1.607z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.44 20.445a2.75 2.75 0 0 1-3.889-3.89zM21.357 2.644a3.053 3.053 0 0 0-4.552.264l-3.356 4.148a6.7 6.7 0 0 1 2.08 1.416 6.7 6.7 0 0 1 1.416 2.08l4.149-3.355a3.053 3.053 0 0 0 .263-4.553"
      />
    </svg>
  );
};
export default SchoolBell_02;
