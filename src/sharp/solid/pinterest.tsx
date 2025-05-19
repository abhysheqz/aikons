import React from "react";
const Pinterest: React.FC<
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
        d="M8 12a4 4 0 1 1 3.145 3.908l1.786-4.542-1.862-.732-4.243 10.792A10.75 10.75 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.165 0-2.287-.185-3.338-.528l1.744-4.436q.765.212 1.594.214a6 6 0 1 0-5.196-3L8.534 14a4 4 0 0 1-.534-2"
      />
    </svg>
  );
};
export default Pinterest;
