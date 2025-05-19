import React from "react";
const Speaker: React.FC<
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
        d="M5.5 1.25h13A2.75 2.75 0 0 1 21.25 4v16a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20V4A2.75 2.75 0 0 1 5.5 1.25M8.445 15a3.55 3.55 0 1 1 7.102 0 3.55 3.55 0 0 1-7.102 0m3.553-9.951a1.951 1.951 0 1 0 0 3.902 1.951 1.951 0 0 0 0-3.902"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Speaker;
