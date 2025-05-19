import React from "react";
const SourceCodeSquare: React.FC<
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
        d="M3 3v18h18V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.502 9.496 2.501 2.51-2.501 2.509M8.498 9.496l-2.5 2.51 2.5 2.509m5.5-6.517-4.004 8.004"
      />
    </svg>
  );
};
export default SourceCodeSquare;
