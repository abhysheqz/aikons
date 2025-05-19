import React from "react";
const CircleArrowDiagonal_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 7.5h2.19l-5.44 5.44V12h-1.5v4.75H12v-1.5H9.81l5.44-5.44V12h1.5V7.25H12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDiagonal_01;
