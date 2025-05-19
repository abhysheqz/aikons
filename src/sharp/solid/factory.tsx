import React from "react";
const Factory: React.FC<
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
        d="M5.25 1.25h8.5v1.5h-7v2h-1.5zM15.25 1.25h2.5v1.5h-2.5zM10.25 4.25h7.5v1.5h-7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 22.75H21a.75.75 0 0 0 .75-.75V9.875l-6 2.5v-2.5l-4.5 1.875zM9 6.25H3a.75.75 0 0 0-.75.75v2.25h7.5V7A.75.75 0 0 0 9 6.25M9.75 10.75h-7.5V22c0 .414.336.75.75.75h6.75z"
      />
    </svg>
  );
};
export default Factory;
