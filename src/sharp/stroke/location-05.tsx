import React from "react";
const Location_05: React.FC<
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
        d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 9.2c0 5.6-7 8.8-7 8.8s-7-3.2-7-8.8C5 5.224 8.134 2 12 2s7 3.224 7 7.2ZM18 19c0 1.657-2.686 3-6 3s-6-1.343-6-3"
      />
    </svg>
  );
};
export default Location_05;
