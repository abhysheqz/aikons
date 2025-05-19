import React from "react";
const SunCloud_02: React.FC<
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
        d="M5.853 10.365A5.752 5.752 0 0 0 7 21.75h10.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.939"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.455 2a1 1 0 0 1 1 1v.601a4.97 4.97 0 0 1 2.814 1.692A1 1 0 0 1 9.73 6.572a2.95 2.95 0 0 0-4.391-.178A3 3 0 0 0 4.485 8.5c0 .899.39 1.702 1.009 2.253a1 1 0 0 1-1.33 1.494A5 5 0 0 1 2.585 9.5H2a1 1 0 0 1 0-2h.585a5 5 0 0 1 .724-1.758l-.534-.538a1 1 0 1 1 1.42-1.408l.525.528a4.9 4.9 0 0 1 1.735-.723V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloud_02;
