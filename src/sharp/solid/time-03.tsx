import React from "react";
const Time_03: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm13.292 4.043L12 10.585 9.207 7.792 7.793 9.207l2.793 2.792-.794.793 1.415 1.415.793-.794.793.794 1.414-1.415-.793-.793 4.292-4.292z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_03;
