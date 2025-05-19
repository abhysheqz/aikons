import React from "react";
const Facebook_02: React.FC<
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
        d="M9.782 2.67c.99-.957 2.352-1.42 3.861-1.42h4.356a.75.75 0 0 1 .751.75v3.5a.75.75 0 0 1-.75.75h-3c-.909 0-1.087.222-1.128.283-.037.055-.075.147-.097.319-.024.177-.025.38-.025.648v1.25H18a.75.75 0 0 1 .728.932l-1 4a.75.75 0 0 1-.728.568h-3.25V22a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-7.75H5a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 5 8.75h3.25V6.7c0-1.685.538-3.069 1.532-4.03"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Facebook_02;
