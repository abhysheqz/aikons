import React from "react";
const AiBrain_05: React.FC<
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
        d="M14.5 8.25V6.5H16v1.75h1.5V6.5H19v1.75h1.5v1.5h1.75v1.5H20.5v1.5h1.75v1.5H20.5v1.5H19v1.75h-1.5v-1.75H16v1.75h-1.5v-1.75H13v-1.5h-1.75v-1.5H13v-1.5h-1.75v-1.5H13v-1.5z"
      />
      <path
        fill="currentColor"
        d="M13.25 6.75V4.5a3.25 3.25 0 0 0-6.427-.69A3.75 3.75 0 0 0 3.914 8.6a3.75 3.75 0 0 0 0 6.799 3.751 3.751 0 0 0 2.909 4.79 3.251 3.251 0 0 0 6.427-.689v-2.25H11.5v-1.5H9.75v-7.5h1.75v-1.5z"
      />
    </svg>
  );
};
export default AiBrain_05;
