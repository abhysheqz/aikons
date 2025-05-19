import React from "react";
const CloudServer: React.FC<
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
        d="M1.25 12a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 17.75H7A5.75 5.75 0 0 1 1.25 12"
      />
      <path
        fill="currentColor"
        d="M5 20h4.25v-1.25h2V17h1.5v1.75h2V20H19v1.5h-4.25v1.25h-5.5V21.5H5z"
      />
    </svg>
  );
};
export default CloudServer;
