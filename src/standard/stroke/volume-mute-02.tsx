import React from "react";
const VolumeMute_02: React.FC<
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
        strokeWidth={1.5}
        d="m18 10 4 4m-4 0 4-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8.5H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3l7 4.5V4z"
      />
    </svg>
  );
};
export default VolumeMute_02;
