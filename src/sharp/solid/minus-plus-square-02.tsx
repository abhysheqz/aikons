import React from "react";
const MinusPlusSquare_02: React.FC<
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
        d="M3.002 2.249a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-18a.75.75 0 0 0-.75-.75zm13.293 4.043-10 10 1.414 1.414 10-10zm-.293 11.207V16h1.5v-2h-1.5v-1.5h-2V14h-1.5v2h1.5v1.5zm-9-7.5h4V8h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlusSquare_02;
