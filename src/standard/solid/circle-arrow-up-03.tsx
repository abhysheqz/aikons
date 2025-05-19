import React from "react";
const CircleArrowUp_03: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.25 7c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75m7.78 4.97-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-5.19l1.22 1.22a.75.75 0 1 0 1.06-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUp_03;
