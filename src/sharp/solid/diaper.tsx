import React from "react";
const Diaper: React.FC<
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
        d="M22.75 10q0 .378-.026.75H21.5a7.75 7.75 0 0 0-7.75 7.75v2.108a10.8 10.8 0 0 1-3.5 0V18.5a7.75 7.75 0 0 0-7.75-7.75H1.276A11 11 0 0 1 1.25 10V8.75H7v-1.5H1.25v-4h21.5v4H17v1.5h5.75zM1.486 12.25a10.77 10.77 0 0 0 7.264 8V18.5a6.25 6.25 0 0 0-6.25-6.25zm20.014 0h1.014a10.77 10.77 0 0 1-7.264 8V18.5a6.25 6.25 0 0 1 6.25-6.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diaper;
