import React from "react";
const Upload_04: React.FC<
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
        d="m9.5 6.75 2.5-2.5 2.5 2.5m-2.5 7.5V4.859M20 16.75l-.221 1.329a2 2 0 0 1-1.973 1.671H6.194a2 2 0 0 1-1.973-1.671L4 16.75"
      />
    </svg>
  );
};
export default Upload_04;
