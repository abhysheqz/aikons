import React from "react";
const WallLamp: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16v6M4 19h8.5V8M5 8h15M12.5 4V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.495 16.008H9.513a.01.01 0 0 1-.01-.007l-2.5-8.01.002-.008 3.003-3.974h4.997l2.992 3.98a.01.01 0 0 1 .001.009L15.504 16a.01.01 0 0 1-.01.007Z"
      />
    </svg>
  );
};
export default WallLamp;
