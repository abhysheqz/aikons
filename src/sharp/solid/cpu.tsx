import React from "react";
const Cpu: React.FC<
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
        d="M3.75 4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75zm4.543 7.793 4-4 1.414 1.414-4 4zm6 0-2 2 1.414 1.414 2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 4.5V2h2v2.5zm5 0V2h2v2.5zM2 8.5h2.5v2H2zm17.5 0H22v2h-2.5zM2 13.5h2.5v2H2zm17.5 0H22v2h-2.5zM8.5 22v-2.5h2V22zm5 0v-2.5h2V22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cpu;
