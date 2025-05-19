import React from "react";
const WaveTriangle: React.FC<
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
        d="M11.743 4.033a1 1 0 0 1 1.125.47L16.58 11H21a1 1 0 1 1 0 2h-5a1 1 0 0 1-.869-.504l-2.13-3.73V19a1 1 0 0 1-1.87.496L7.42 13H3a1 1 0 1 1 0-2h5a1 1 0 0 1 .868.504L11 15.234V5a1 1 0 0 1 .743-.967"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveTriangle;
