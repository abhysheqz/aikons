import React from "react";
const LinkForward: React.FC<
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
        d="M13 8.5h.5V4l7.5 7.5-7.5 7.5v-4.5C7 14.5 3 20 3 20v-1.5c0-5.523 4.477-10 10-10Z"
      />
    </svg>
  );
};
export default LinkForward;
