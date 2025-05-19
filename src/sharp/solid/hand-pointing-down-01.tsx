import React from "react";
const HandPointingDown_01: React.FC<
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
        d="m18.982 4.533.697 1.454c.372.777.823 1.943.999 3.12.17 1.14.115 2.518-.821 3.46-2.034 2.047-4.74 2.622-6.603 2.685v4.998a2.5 2.5 0 0 1-5 0v-8.374l-.946.993-.024.022a2.4 2.4 0 0 1-3.503-.337 2.53 2.53 0 0 1 .006-3.1L8.106 3.75V1.25h10.54v2.582z"
      />
    </svg>
  );
};
export default HandPointingDown_01;
