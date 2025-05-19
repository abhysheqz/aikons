import React from "react";
const Chair_02: React.FC<
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
        d="M7 15v7m10-7v7M6 14v1h12v-1a2.25 2.25 0 0 0-1.385-2.077 12 12 0 0 0-9.23 0A2.25 2.25 0 0 0 6 14"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 12-.67-6.701A3 3 0 0 1 9.315 2h5.37a3 3 0 0 1 2.985 3.299L17 12M7 18h10"
      />
    </svg>
  );
};
export default Chair_02;
