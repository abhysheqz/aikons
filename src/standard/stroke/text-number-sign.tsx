import React from "react";
const TextNumberSign: React.FC<
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
        d="M2 20V4l11 16V4M16 13h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.002 5.5a1.5 1.5 0 0 1 1.5-1.5H20.5A1.5 1.5 0 0 1 22 5.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.998a1.5 1.5 0 0 1-1.5-1.5z"
      />
    </svg>
  );
};
export default TextNumberSign;
