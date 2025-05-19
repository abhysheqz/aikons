import React from "react";
const SevenZ_01: React.FC<
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
        d="M3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5zM5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .67 1.085l-3 6a.75.75 0 1 1-1.34-.67l2.456-4.915H6a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .624 1.166l-3.223 4.834H18a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.624-1.166l3.223-4.834H14a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenZ_01;
