import React from "react";
const Download_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15V5m0 10c-.7 0-2.008-1.994-2.5-2.5M12 15c.7 0 2.008-1.994 2.5-2.5M5 19h14"
      />
    </svg>
  );
};
export default Download_05;
