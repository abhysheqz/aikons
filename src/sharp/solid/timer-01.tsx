import React from "react";
const Timer_01: React.FC<
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
        d="M10.594 13.03 7 6l6.323 4.891c.899.695.903 2.02.01 2.721-.895.701-2.228.418-2.739-.581"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 1.25H12c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a10.72 10.72 0 0 1 3.225-7.677l1.368 1.396A8.77 8.77 0 0 0 3.205 12a8.795 8.795 0 1 0 17.59 0 8.797 8.797 0 0 0-7.818-8.742V5.16h-1.954z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Timer_01;
