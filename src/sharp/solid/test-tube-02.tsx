import React from "react";
const TestTube_02: React.FC<
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
        d="M16.75 2.75H18v-1.5H6v1.5h1.25V18a4.75 4.75 0 1 0 9.5 0zm-1.5 0h-6.5v4.525c.4-.061.796-.004 1.162.104.8.235 1.67.78 2.493 1.308.978.627 1.63.624 2.023.492.369-.125.65-.41.822-.732zm-5.218 15.51a1 1 0 0 1 .707-1.224l.009-.002a1 1 0 1 1 .518 1.932l-.009.002a1 1 0 0 1-1.225-.707m2.707-5.224a1 1 0 1 0 .518 1.932l.009-.002a1 1 0 1 0-.518-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_02;
