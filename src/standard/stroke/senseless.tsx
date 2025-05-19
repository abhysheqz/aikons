import React from "react";
const Senseless: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 16.6-.27-.2c-.718-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L8 16.658M8 9a1 1 0 0 0-1-1c-.7 0-1 .598-1 1.207C6 10.17 6.711 11 7.707 11 9.523 11 9.767 9.402 10 8m6 2a1 1 0 0 0 1 1c.7 0 1-.598 1-1.207C18 8.83 17.289 8 16.293 8c-1.816 0-2.06 1.598-2.293 3"
      />
    </svg>
  );
};
export default Senseless;
