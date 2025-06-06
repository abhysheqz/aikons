import React from "react";
const HoldLocked_02: React.FC<
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
        d="m19.5 11.5.001-4a1.5 1.5 0 0 0-3 0m-6-2a1.5 1.5 0 0 0-3 0v7.963L5.88 11.837a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.004 4.018c.682.912 1.023 1.367 1.433 1.722.626.54 1.376.917 2.183 1.094.498.11 1.031.117 2.043.117M10.501 5.5v-2a1.5 1.5 0 0 1 3 0v2m-3 0V10m3-4.5a1.5 1.5 0 0 1 3 0v2m-3-2V10m3-2.5V10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 19.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C16.098 17 16.565 17 17.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C15 20.902 15 20.435 15 19.5ZM16.5 15.5a1.5 1.5 0 0 1 3 0V17h-3z"
      />
    </svg>
  );
};
export default HoldLocked_02;
