import React from "react";
const Pentagon_01: React.FC<
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
        d="M11.532 1.414a.75.75 0 0 1 .937 0l10 8a.75.75 0 0 1 .259.768l-3 12a.75.75 0 0 1-.728.568H5a.75.75 0 0 1-.728-.568l-3-12a.75.75 0 0 1 .26-.768z"
      />
    </svg>
  );
};
export default Pentagon_01;
