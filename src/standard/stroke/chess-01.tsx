import React from "react";
const Chess_01: React.FC<
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
        d="M5.5 18.043h13M7.5 6.5V2l3 2.5h3l3-2.5v4.5L14 9h-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 9-.928 6.493a2 2 0 0 1-.38.917L6.4 19.467a2 2 0 0 0-.4 1.2V22h12v-1.333a2 2 0 0 0-.4-1.2l-2.293-3.057a2 2 0 0 1-.38-.917L14 9"
      />
    </svg>
  );
};
export default Chess_01;
