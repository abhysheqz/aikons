import React from "react";
const SquareLockAdd_01: React.FC<
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
        d="M11 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5M18.75 19.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.75 8.25H2.25v14.5h13v-1.5h-3v-5h3v-3h4.5z"
      />
    </svg>
  );
};
export default SquareLockAdd_01;
