import React from "react";
const TextBold: React.FC<
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
        d="M5 12h7.5a4.5 4.5 0 1 0 0-9H5zm0 0h8.5a4.5 4.5 0 1 1 0 9H5z"
      />
    </svg>
  );
};
export default TextBold;
