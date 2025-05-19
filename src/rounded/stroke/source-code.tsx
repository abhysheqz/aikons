import React from "react";
const SourceCode: React.FC<
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
        d="m17 8 1.84 1.85c.773.778 1.16 1.167 1.16 1.65s-.387.872-1.16 1.65L17 15M7 8 5.16 9.85C4.387 10.628 4 11.017 4 11.5s.387.872 1.16 1.65L7 15M14.5 4l-5 16"
      />
    </svg>
  );
};
export default SourceCode;
