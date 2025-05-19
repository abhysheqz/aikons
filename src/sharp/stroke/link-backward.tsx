import React from "react";
const LinkBackward: React.FC<
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
        d="M11 8.5h-.5V4L3 11.5l7.5 7.5v-4.5C17 14.5 21 20 21 20v-1.5c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  );
};
export default LinkBackward;
