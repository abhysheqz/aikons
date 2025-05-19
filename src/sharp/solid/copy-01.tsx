import React from "react";
const Copy_01: React.FC<
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
        d="M8.47 8.47A.75.75 0 0 1 9 8.25l13 .008a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V9c0-.199.08-.39.22-.53"
      />
      <path
        fill="currentColor"
        d="M1.47 1.47A.75.75 0 0 1 2 1.25l15 .01a.75.75 0 0 1 .75.75v4.743l-8.751.005a2.25 2.25 0 0 0-2.249 2.25v8.742H2a.75.75 0 0 1-.75-.75V2c0-.199.08-.39.22-.53"
      />
    </svg>
  );
};
export default Copy_01;
