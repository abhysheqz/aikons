import React from "react";
const CircleArrowDiagonal_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1 6a.75.75 0 0 1 0 1.5H9.81l5.44 5.44V13a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.19L8.75 9.81V11a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDiagonal_02;
