import React from "react";
const Presentation_05: React.FC<
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
        d="M21.5 14V5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v4M8 22l.9-1.2c.294-.393.442-.589.653-.694.21-.106.456-.106.947-.106h3c.49 0 .736 0 .947.106.211.105.359.301.653.694L16 22"
      />
    </svg>
  );
};
export default Presentation_05;
