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
        fillRule="evenodd"
        d="M1.25 12a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 17.75h-4.75v1H14a.75.75 0 0 1 .75.75v.5H19a.75.75 0 0 1 0 1.5h-4.25v.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-.5H5A.75.75 0 0 1 5 20h4.25v-.5a.75.75 0 0 1 .75-.75h1.25v-1H7A5.75 5.75 0 0 1 1.25 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudServer;
