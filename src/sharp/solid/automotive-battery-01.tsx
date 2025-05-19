import React from "react";
const AutomotiveBattery_01: React.FC<
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
        d="M1.25 5.5A.75.75 0 0 1 2 4.75h20a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm16.5 2.25v2h2v1.5h-2v2h-1.5v-2h-2v-1.5h2v-2zm-8 2h-5.5v1.5h5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.25h-1.5v-2.5h-2v2.5h-1.5zM4.75 3a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v3.25h-1.5v-2.5h-2v2.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AutomotiveBattery_01;
