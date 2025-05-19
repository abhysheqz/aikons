import React from "react";
const TextVariableFront: React.FC<
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
        d="M7.5 15h-3M6 3v12M2 4.5V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5M19.5 15h-3M18 3v12M14 4.5V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5M2 19h8M14 19h8"
      />
      <circle
        cx={12}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default TextVariableFront;
