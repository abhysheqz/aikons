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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1 6a.75.75 0 0 0 0 1.5h1.19l-5.44 5.44V13a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H9.81l5.44-5.44V11a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDiagonal_01;
