import React from "react";
const AiLearning: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v5M15 6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM10.5 11v1.5m3-1.5v1.5m-3-9V5m3-1.5V5M9 6.5H7.5m1.5 3H7.5m9-3H15m1.5 3H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.5 4-2.225-.636A1 1 0 0 0 2 4.326v12.95a1 1 0 0 0 .714.957L12 21l9.284-2.767a1 1 0 0 0 .715-.958V4.325a1 1 0 0 0-1.275-.96L18.5 4"
      />
    </svg>
  );
};
export default AiLearning;
