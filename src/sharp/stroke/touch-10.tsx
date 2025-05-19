import React from "react";
const Touch_10: React.FC<
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
        d="M6.5 21v-9.5a5.5 5.5 0 1 1 11 0V21"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 13v-1a9 9 0 0 1 18 0v1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 14v-2.5a2.5 2.5 0 0 1 5 0V14z"
      />
    </svg>
  );
};
export default Touch_10;
